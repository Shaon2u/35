# AlphaXBot Android (Flutter) — Product Brief

Source: authenticated web exploration via [Explore AlphaXBot for Android planning](bc-63871aa8-eb22-5664-9777-b8817865e2b8) on 2026-10-02, corrected against captured screenshots.  
Stack decision: **Flutter** (Cursor Cloud env already provisioned).

## Product

AlphaXBot is a crypto/forex **trading fund management** platform: investments, wallets, team/affiliate earnings, deposits/withdrawals, and support — marketed as “manage investments, staking, wallets and team from one secure dashboard.”

Base URL: `https://alphaxbot.com`

## Brand

| Token | Value |
| --- | --- |
| Primary | Deep navy `#0D1B2A` / `#0B1739` |
| Accent | Teal `#26C1C1` / `#4FD1C5` |
| Surface | White `#FFFFFF` |
| Page bg | Light gray `#F4F6FA` |
| Logo | Teal geometric “A” + `alphaxbot` wordmark |
| Shell | Dark sidebar + light content (authenticated) |
| Login | Split layout: dark brand panel + light sign-in card |

Reference screenshots: `docs/android/screenshots/`

## Confirmed navigation (authenticated)

Sidebar (source of truth from dashboard/settings/support captures):

1. Dashboard  
2. Investment  
3. Team Details  
4. Topup  
5. Wallet  
6. Transfer  
7. Withdrawal  
8. Report  
9. Support  
10. Setting  

Settings sub-tabs: **Profile** · **Password** · **2FA** · **Email**

Public: `/no-auth/login`, `/no-auth/forgot-password`, signup linked from login.

## Dashboard content (observed)

- Greeting + date  
- Promo banner (e.g. monthly draw)  
- Quick actions: Invest, Deposit, Withdraw, Wallet  
- Cards: Active Investment, Total Profit, Total Affiliate Earnings  
- Performance (team investment / team profit)  
- Sales overview chart  
- Affiliate link copy control in sidebar  

## Flutter MVP recommendation

**Bottom nav (4):** Home · Wallet · Invest · More  

| MVP | Later |
| --- | --- |
| Login / forgot password / logout | Transfer |
| Biometric unlock (optional) | Team Details depth |
| Dashboard summary | Report analytics |
| Wallet balances + history | Advanced charts |
| Topup / Deposit request | Push deep-links |
| Withdrawal request | |
| Profile + password + 2FA settings | |
| Support tickets (incl. image attach) | |
| **Mandatory force-update** gate | |
| Website APK download entry | |

## Security & privacy

- Ask only for permissions when needed: `INTERNET`, network state, notifications, biometric; camera/files only for support attachments or QR if added later.  
- Do not collect unnecessary PII; minimize local storage; encrypt tokens (secure storage / Keystore).  
- Re-auth for withdraw/transfer; respect 2FA when enabled.  
- No hardcoded secrets or test credentials in the app or repo.

## Force update (mandatory)

On launch (and resume): call version config API → if `minSupportedVersion > installed`, block app with update screen → open APK/download URL from website. No skip.

## Open questions

1. Official API docs / auth model (JWT vs session)?  
2. Real-time prices via WebSocket?  
3. Exact package name + Play vs sideload APK only?  
4. Which MVP screens are cut vs must-ship for v1?  

## Next build step

Scaffold Flutter app in this repo using brand tokens above, then implement auth + force-update + MVP tabs against AlphaXBot APIs.
