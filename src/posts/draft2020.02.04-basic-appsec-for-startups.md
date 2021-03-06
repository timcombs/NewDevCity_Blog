---
slug: /basic-appsec-for-startups
date: 2020-02-04
author: Tim Combs
title: Basic AppSec for Startups
tags: ["appsec", "startup", "security", "infosec"]
published: false
---

# Basic AppSec for Startups

I've been running into versions of this conversation in various places on the web this month. It is pulled from a Twitter thread created by Mikko Hypponen - @mikko - from his blog post [The Ten Most Common Security Problems That Startup Companies Fall Into](https://medium.com/maki-vc/the-ten-most-common-security-problems-that-startup-companies-fall-into-6ec468091ea7 "The Ten Most Common Security Problems That Startup Companies Fall Into")

## "Security is Everyone's Job" - Tanya Janca
- If we make AppSec every team member's responsibility then security becomes standard practice and part of the definition of quality
- Practically every startup ends up writing code, even if technology wouldn't be the main focus of the company. Here’s a checklist I made to help you and your hot new startup avoid the most common infosec pitfalls.

## Checklist to Make
1) Speed is the enemy of security. The faster you move, the faster you develop, the faster you deploy — the less time you have for bug checking, quality assurance and testing. Security is not something you can add to a ready product, it has to be built in from the design phase.
- Do not invent stuff which has been invented already. There are trusted and tested principals that will save you time and make you safer. Definitely do not develop things such as encryption or hashing algorithms by yourself. Just don’t.
- Most startups today choose to go for cloud services such as AWS, Azure and GCE. Amazon, Microsoft and Google are investing hundreds of millions of dollars into their security. Breaking into the servers that run the largest cloud providers is hard...
- …but you need to use the cloud right. The easiest way to screw up with cloud servers or cloud storage is to lose credentials. Make sure your developers use strong, unique passwords on all cloud services.
- Actually, forget that. Just make sure all your developers use a password manager. Also, make sure everybody understands the risks of posting Private API keys to GitHub or pasting AWS Access keys to Pastebin.
- At the end of your next all-hands dev meeting, open shhgit.darkport.co.uk on the projector and let everybody watch for five minutes. That should do it.
- Make sure everybody has their mobile devices locked by default (Face ID / Touch ID is fine). Make sure your people enable two-factor authentication where possible, with an Authenticator app. And do not force regular password changes on your users for no reason.
- When I walk around startup events, everybody seems to be rocking a MacBook. Macs are great for security, but probably not for the reason most people think. As Mac market share hovers only around 10% , criminals keep focusing only on Windows with their attacks.
- Do note that Mac users fall for phishing just as easily as Windows users — and iPhone and Android users fall even better, as there are fewer safeguards on those, and detecting a fraudulent lookalike URL is harder on a smaller screen. [Mac users are much worse, put in the piece form the shlayer virus]
- Ransomware continues to be one of the biggest problems we see. Recovering from ransomware attacks would be easy if you’d always have an up-to-date backup of your data. Surprisingly, many companies cannot restore their data when they are attacked.
- This happens often because online backups are deleted or encrypted by the attacker. This is why cloud backup and Time Machine systems alone are not good enough for backup. Have regular off-line backups that will survive even if your office building burns down.
- Update prompts are annoying, but almost always the reason for the update is security. So update your OS. Update your applications. Update your apps. This seems obvious, but updating can fail for surprising reasons.
- In the fast-moving environment of a startup, people come and go all the time. Make sure your people do not take their access rights with them. Make sure you can lock people out of your repositories and cloud systems.
- Make sure you can change passwords and access rights as needed. It’s especially easy to get burned with shared passwords you use for your corporate social media accounts. Force a password change on public company accounts whenever someone who had access leaves the company.
- Make sure you exactly know who can move money in the company, and make sure they know how modern Business Email Compromise attacks work. These attacks are way more complex than traditional fake billing scams.
- Make sure your developers can identify and fix the common security vulnerabilities. Then have your app security tested. Have your network pentested. Have your code audited.
- And when you know your stuff is safe, your next challenge is to convince your customers that you can be trusted, even though you’re just a startup. One tip there is to get experienced advisors to join you, validating your security process and vouching for you. Good luck!