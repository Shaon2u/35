#!/usr/bin/env bash
# Idempotent Flutter + Android SDK bootstrap for Cursor Cloud Agents.
# Safe when toolchains already exist in the environment snapshot.
set -euo pipefail

FLUTTER_VERSION="${FLUTTER_VERSION:-3.47.6}"
FLUTTER_HOME="${FLUTTER_HOME:-/opt/flutter}"
ANDROID_HOME="${ANDROID_HOME:-/opt/android-sdk}"
JAVA_HOME_DEFAULT="/usr/lib/jvm/java-21-openjdk-amd64"
CMDLINE_TOOLS_URL="${CMDLINE_TOOLS_URL:-https://dl.google.com/android/repository/commandlinetools-linux-13114758_latest.zip}"
FLUTTER_URL="${FLUTTER_URL:-https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz}"

export JAVA_HOME="${JAVA_HOME:-$JAVA_HOME_DEFAULT}"
export ANDROID_HOME
export ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-$ANDROID_HOME}"

ensure_owner_opt() {
  if [[ ! -d /opt ]]; then
    sudo mkdir -p /opt
  fi
  if [[ "$(stat -c %U /opt 2>/dev/null || true)" != "ubuntu" ]]; then
    sudo chown ubuntu:ubuntu /opt || true
  fi
}

install_flutter() {
  if [[ -x "${FLUTTER_HOME}/bin/flutter" ]]; then
    echo "Flutter already present at ${FLUTTER_HOME}"
    return
  fi
  echo "Installing Flutter ${FLUTTER_VERSION}..."
  ensure_owner_opt
  curl -fsSL "${FLUTTER_URL}" -o /tmp/flutter.tar.xz
  sudo rm -rf "${FLUTTER_HOME}"
  sudo tar -xJf /tmp/flutter.tar.xz -C /opt
  rm -f /tmp/flutter.tar.xz
  sudo chown -R ubuntu:ubuntu "${FLUTTER_HOME}"
}

install_android_sdk() {
  mkdir -p "${ANDROID_HOME}/cmdline-tools"
  if [[ -x "${ANDROID_HOME}/cmdline-tools/latest/bin/sdkmanager" ]]; then
    echo "Android cmdline-tools already present"
  else
    echo "Installing Android cmdline-tools..."
    curl -fsSL "${CMDLINE_TOOLS_URL}" -o /tmp/cmdline-tools.zip
    rm -rf /tmp/cmdline-tools-extract
    mkdir -p /tmp/cmdline-tools-extract
    unzip -q /tmp/cmdline-tools.zip -d /tmp/cmdline-tools-extract
    rm -rf "${ANDROID_HOME}/cmdline-tools/latest"
    mv /tmp/cmdline-tools-extract/cmdline-tools "${ANDROID_HOME}/cmdline-tools/latest"
    rm -f /tmp/cmdline-tools.zip
    rm -rf /tmp/cmdline-tools-extract
  fi

  export PATH="${FLUTTER_HOME}/bin:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${PATH}"

  # Install required SDK components if missing
  local platform_dir="${ANDROID_HOME}/platforms/android-36"
  local build_tools_dir="${ANDROID_HOME}/build-tools/36.0.0"
  if [[ ! -d "${platform_dir}" || ! -d "${build_tools_dir}" || ! -x "${ANDROID_HOME}/platform-tools/adb" ]]; then
    echo "Installing Android SDK packages..."
    yes | sdkmanager --sdk_root="${ANDROID_HOME}" --licenses >/tmp/android-licenses.log 2>&1 || true
    sdkmanager --sdk_root="${ANDROID_HOME}" \
      "platform-tools" \
      "platforms;android-36" \
      "platforms;android-35" \
      "build-tools;36.0.0" \
      "build-tools;35.0.0"
    yes | sdkmanager --sdk_root="${ANDROID_HOME}" --licenses >/tmp/android-licenses2.log 2>&1 || true
  else
    echo "Android SDK packages already present"
  fi
}

configure_paths() {
  sudo ln -sfn "${FLUTTER_HOME}/bin/flutter" /usr/local/bin/flutter
  sudo ln -sfn "${FLUTTER_HOME}/bin/dart" /usr/local/bin/dart

  sudo tee /etc/profile.d/android-sdk.sh >/dev/null <<EOF
export ANDROID_HOME=${ANDROID_HOME}
export ANDROID_SDK_ROOT=${ANDROID_HOME}
export JAVA_HOME=${JAVA_HOME}
export PATH="\$ANDROID_HOME/cmdline-tools/latest/bin:\$ANDROID_HOME/platform-tools:\$PATH"
EOF
  sudo chmod 644 /etc/profile.d/android-sdk.sh

  export PATH="${FLUTTER_HOME}/bin:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${PATH}"
  flutter config --android-sdk "${ANDROID_HOME}" >/dev/null
  flutter config --jdk-dir "${JAVA_HOME}" >/dev/null || true
  flutter config --no-analytics >/dev/null || true
  dart --disable-analytics >/dev/null || true
}

refresh_project_deps() {
  if [[ -f pubspec.yaml ]]; then
    echo "Running flutter pub get for workspace project..."
    flutter pub get
  else
    echo "No pubspec.yaml in workspace yet; skipping flutter pub get"
  fi
}

main() {
  install_flutter
  install_android_sdk
  configure_paths
  refresh_project_deps
  flutter --version
  echo "cloud-agent-install.sh completed successfully"
}

main "$@"
