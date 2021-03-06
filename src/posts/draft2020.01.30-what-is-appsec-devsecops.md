---
slug: /what-is-appsec-devsecops
date: 2020-01-30
author: Tim Combs
title: What is AppSec and DevSecOps?
tags: ["appsec", "devsecops", "security"] 
published: false
---

# What is AppSec and DevSecOps?
Notes from
[Security Learns to Sprint - RSAConf 2019](https://www.youtube.com/watch?v=otmF5KD15o4 "Security Learns to Sprint")\
and
[Security is Everyone's Job - OWASP Ottawa June 2019](https://www.youtube.com/watch?v=zQJ5dxCvniU "Security is Everyone's Job")\

Tanya Janca, Senior Cloud Developer Advocate, Microsoft\
twitter - @shehackspurple\
blog - dev.TO/shehackspurple

**Application Security (AppSec)** - any and all work towards ensuring that software is secure.

**DevSecOps** - Application Security in the DevOps environment
- How Security can fit in and not break DevOps
- Some folks see Sec as cleaning up DevOps messes
- Should be facilitation and collaboration

**Goal of Software Development is to make the easiest way the most secure way**
- Security's job is to enable Dev & Ops to their jobs securely
  - Enable them
  - Teach them
  - Automate process for them
  - Give them lots of feedback

## Introduction to Application Security
- AppSec is any & every activity you perform to ensure your software is secure
- Poor AppSec is a problem
  - causes 29-40% of breaches - Verizon data breach investigation for 2016-17
  - not covered in most post-secondary CS and Software Engg programs
- AppSec is outnumbered
  - approx 100 Dev to 10 Ops to 1 Sec
  - but usually not this good honestly
  - have to work smarter not harder and triage - triage - triage
- Waterfall Never Worked Well
  - the security model that went with this was even worse
  - waterfall devs don't wanna do code review
  - waterfall devs don't ask permission - they hack at code

## Introduction to DevSecOps
> **"DevSecOps is Performing AppSec in a Dev Ops culture"**\
> Imran Mohammed\
> twitter - @secfigo\
> blog - practical-devsecops.com

## Goals of DevOps (really the goals of DevSecOps as well)
- Improved deployment frequency
  - Security emergencies must be fixed NOW
- Lower failure rates
  - Resiliency is key!
  - CIA Triad: Confidentiality, Integrity, Availability
  - Resiliency = Availability
- Faster time to market
  - Security doesn't win if the business doesn't also win
  - Security has to get out of the way of business getting done

> **"DevOps is the best thing to happen to Application Security since OWASP"**\
> Tanya Janca

## Three ways of DevOps
1. Increase the speed of development pipeline overall\
  SDLC - Software Development Life Cycle:\
  Requirements -> Design -> Code -> Testing -> Release

    - __What does this mean for DevOps?__
      - Emphasize the efficiency of the entire system
        - collaboration with AppSec to tune security tools - SAST & DAST
        - collaboration with AppSec to tune web proxy scanners
        - use severe SECURITY bugs to break the build
        - security bugs that don't break the build MUST go in defect tracker
        - reuse good tested code
        - use templates - including containers and VMs - sec code library
        - help Security set up regular scans
        - Only deploy up-to-date images & containers
        - use the parallel security pipeline
        - use unit tests and negative unit tests
        - make sure your software supply chain is secure
          - 80% of most apps are libraries
          - at least 2 tools to check all the dependencies
          - Synk, Black Duck, Sonarqube, OWASP dependency check, Retire.js remove known vulnerable code/libraries/components

    - __What does this mean for Security?__
      - Security must not slow everything down unless REAL emergency
      - Don't break the build/Don't become the bottleneck
      - Tune security tools that do not produce false positives
      - Learn to do sprints!
        - line up with dev team sprints
          - maybe ask for a security sprint
        - break security activities into smaller pieces
        - EX: if you have a static code analysis tool
          - then just look for one class of bugs at a time
          - give devs list of bugs, a primer on how to fix them, becomes a sprint task
          - is teaching the devs as you go!
      - Make processes that actually WORK
      - Provide tested templates of code that is known-secure (Sec code library)
      - Create a parallel Security pipeline!
        - doesn't release
        - runs every security test that is needed
        - allows build pipeline to continue
      - Don't be afraid that developers have security tools
        - Buy licenses & training for the tools
      - Write code libraries for specific business needs
        - mostly big companies
        - dev team might actually help!
      - Be creative in tools and problem-solving

2. Immediate feedback after deployment\
  Requirements <- Design <- Code <- Testing <- Release
    - Push or "Shift Left" - feedback at each stage of pipeline
      - later you fix a quality or security bug the more that bug costs
      - each stage of the pipeline increases the bug cost

    - __What does this mean for DevOps?__
      - Provide feedback to the security team about their concerns
      - Participate in Security activities - collaboration & knowledge
      - Add security sprints to your project timeline
      - Learn to use security tools
      - Internalize that Security becomes a part of the definition of quality

    - __What does this mean for Security?__
    - Security team needs to listen to DevOps then take action
    - Provide feedback more often
      - Add Security into each phase of the SDLC
        - look at requirements with dev team
        - participate in design conversations with dev team
        - participate in code review with dev team
        - EX: writing a wrapper around a function
          - RENAME it so devs know it is insecure
          - will reduce usage by more than 1/2 within a month
          - can spark conversation about better options
    - Automate as much as humanly possible
      - teach dev & ops to understand results
    - Tune the Security tools so they don't waste dev time
    - Really big Security flaws need to break the build!
      - major culture change
      - security MUST to be part of quality
    - Unit tests
      - Positive unit tests make sure application works as expected
      - Negative unit tests ensure that application can
        - gracefully handle invalid input
        - gracefully handle unexpected user behavior
      - What devs actually have 70% code coverage with unit tests?
        - work with them to add payloads and other bad things
        - unit tests run FAST - so won't slow them down
        - 1 negative for every 10 positive is a good start for regressive tests
      - Must get them to really use unit tests
    - Invite dev and ops to participate in Security activities
      - will find undocumented code
    - Let them know what you expect from dev & ops when there is an incident
      - have them join in Incident Response
      - have them join in Threat Modeling
      - have them participate in Security sprints
    - Use metrics to track security trends
      - cross-site scripting & security headers usually at top of list
      - then give them a lunch & learn and give them a cheatsheet
      - tools like OWASP DefectDojo work great for this
    - Create unit tests out of pentest results
      - check an app for vulnerabilities, take results and check other apps
      - make unit tests from results

3. Continuous learning\
  Requirements <- Design <- Code <- Testing <- Release\
    - Every moment is a teaching moment
    - Often experimenting and failing fast
    - Going to conferences and taking courses
    - Making time for learning, experimentation, risk taking
    - Most empowering thing for DevOps that Security can do

    - __What does this mean for DevOps?__
        - Should go to security trainings that are offered
        - Should look to learn about security

    - __What does this mean for Security?__
        - Need to teach devs and Ops folks - pay them for their time
        - Don't need to perfect - devs & ops are sponges for this info!
        - Need to encourage DevOps to share their findings
        - Share info widely regardless
        - Simulation practice for deployments and incidents
          - patterns will arise
          - will get a handle on systemic issues


## What Security should to do after an incident
- Post-Mortems should be blameless - look for causes not blame
- All discoveries, fixes, templates, tips MUST go into a Knowledge Base
- Create formal lessons and learning opportunities
  - lunch & learns
  - white papers
  - formal training
  - job shadowing
- Teach ops and devs what output from tools really means

## Conclusions
- Culture change to make Security part of DevOps
- Reinforce Security wins - devs love hi-fives, candy & stickers
- COLLABORATE
- Do Not Blame
- Create Security champions
  - encouragement
  - draw-them-in
  - best way to hire security people is to make them

## Apply this Security Template
- Quickly:
  - add security verification to the CI/CD pipeline
  - create critical security bugs to break the build
- Soon:
  - create negative unit tests from positive unit tests
  - create lessons on top 3 security bugs
  - create high security bugs to break the build
- Later:
  - give regular lessons on AppSec
    - create security exercises
    - create simulations
  - improve security process for speed and removal of obstacles
  - create parallel security pipeline
  - create medium security bugs to break the build

## RESOURCES
- Take a look at OWASP - Open Web Application Security Project\
  Int'l non-profit that operates to help everyone create more secure software\
  https://www.owasp.org/index.php/OWASP_DevSlop_Project
  https://www.youtube.com/channel/UCSmjcWvgVBqF3x_7e5rfe3A/videos
- Microsoft DevOps Journey was not an easy one\
  https://stories.visualstudio.com/
- Links for Getting Started in Application Security\
  https://aka.ms/GettingStartedWithAppSec
- \#MentoringMonday on Twitter run by Tanya Janca to help AppSec enthusiasts