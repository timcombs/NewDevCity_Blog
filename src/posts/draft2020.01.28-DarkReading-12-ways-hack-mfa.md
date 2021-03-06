---
slug: /dark-reading-12-ways-to-hack-multi-factor-authentication
date: 2020-01-28
author: Tim Combs
title: Dark Reading Introduction to Multi-Factor Authentication
tags: ["security", "authentication", "mfa"]
published: false
---

# Dark Reading Introduction to Multi-Factor Authentication

## Speaker

- Roger Grimes - Data-Driven Security Evangelist - KnowBe4

### Intro to multi-factor authentication

- Factors

  - something you have - usb token, rfid, smartcard
  - something you know - passwords, pin
  - something you are - biometrics, fingerprints
  - your context - behavior, actions, devices, locations

  - use one - 1FA - single factor
  - use two - 2FA - two factor
  - use more - MFA - multi-factor
    - not unhackable
    - but WAAAAAAY better than 1FA
    - all authentication is buggy - it is software
    - TPM attacks
      - electron microscope to see private key
      - freeze RAM with canned air
      - 2017 ROCA attack

### Types of authentication checks

- In-band - factor using same channel for authentication check
- Out-of-Band - factor using different channel

- 1-way vs 2 way
  - one way - server or client-only
    - most common
  - two-way (mutual)
    - not common
    - more secure than one-way
    - however more failures and false negatives
    - kerberos is a common 2 way - server in the middle

### Authentication In General

- Identifier/Idenity - Unique label within a common namespace
- Authentication - process of providing factor(s)
- Authorization - process of comparing authenticated subject's access (token) against previously permissioned resources to determine subject access

#### HUGELY IMPORTANT

- No matter how authentication happens authorization rarely uses the same authentication token
- these processes are often not linked at all
- many MFA hacks based on this

### Main MFA Hacking methods

- Social Engineering
- Technical Attacks
- Physical
  - often use two or more the methods
  - often because insecure transitioning between linked steps
- Usually requires Man-in-the-middle (MitM) attack
- attacker just wants to access session token
- network session hijacking
  - network session hijacking - proxy theft
  - attacker gets victim to visit rogue website
  - victim puts in MFA credentials
  - attacker then uses credentials to take over user
  - evilginx - tool to get around MFA
    - dozens of similar tools
    - this hack happens millions of times per week
- man-in-the-endpoint attacks

  - sometimes called man-in-the-brower attacke
  - if endpoint is compromised MFA won't help you
  - attacker does whatever they want to in your systems
  - easily start a second session where the user isn't aware

- SMS MFA hacks - very popular
  - US Government says SMS is hacked so much - we should not use it
  - still used because cell phones ubiquitous
  - NO AUTHENTICATION - yikes!
- SIM swaps

  - Subscriber Identity Module
  - contains cell phone vendor network info, device ID, phone #, some app data
  - traditionally on micro-SD card
  - now often stored and moved digitally
  - activated phone with your SIM info becomes your phone
  - takes awhile to figure out
  - usually a social engineering attack
    - often starts through phishing the victim
    - sometimes uses an inside contact
  - crypto gets stolen this way a lot

- Real World Hacks

  - social engineering
  - because humans want to help they will bypass policy
  - hackers user stressor methods to do this
  - "crying baby" noises to social engineer

- One Time Passwords (OTP)
  - Google Authenticator uses this
    - 80bits can "guessed" in 3 days - US gov says to use 128 bits
    - hackers will go into email to get QR codes or to get keys
    - these QR codes never expire
    - can be victim on multiple devices
  - randomly generated seed value (permanently stored)
  - these counter/algorithms can be found on the internet and exploited
  - Cain & Abel hacking tool had a module to do this:
    - serial number of the device and the seed will use this
    - Chinese APT used this to get RSA client databases to get into Lockheed
  - Pharo is accessible online and can be used to mimic google authenticator

### Web Apps don't force users to user MFA

- so most folks use 1FA or rarely 2FA
- worst are password recovery questions
  - usually can't create a new account without them
  - 20% of recovery questions can guessed on first try
  - 40% of users can't recall their answers
  - 16% of answers found in user social media profile
  - so easy to figure these answers
- 4chan kid broke into Sarah Palin's email account using this
- never give a real answer for them
  - unfortunately then you have to record the fake answers some where
  - use a password mgr
- biometrics ARE NOT SECRET
  - once stolen anyone could be you