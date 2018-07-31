# To Beep or Not to Beep?

#### Epicodus Intro to Programming: Weekly Independent Project
Friday June 8th, 2018

#### By Matt Smith

## Description
construct a site that counts down to zero from an inputted number less than 30 unless one of these conditions is met in this order of importance:
* replaces number divisible by 3 with a quote from 2001
* replaces numbers containing the integer "1" with a "BOOP"
* replaces numbers containing the integer "0" with a "BEEP"
* numbers larger than 30 will display an error message since such outputted countdowns can become unwieldy very quickly

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Replace numbers that contain a "0" with "BEEP"** | 20 | BEEP...19 [...] |
| **Replace Numbers that contain a "1" with "BOOP"** | 11 | BOOP...BEEP[...] |
| **Numbers divisible by 3 are replaced with a phrase**| 9 | I'm sorry, Dave. I'm afraid I can't do that...8[...]|
| **Numbers larger than 30 are replaced with a phrase and do not count down**| 10e4 | You're being unreasonable, Dave.  That number is too large|


### Known Bugs

1. none at this time.  Please contact MattSmithereens@gmail.com with any encountered bugs

## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* Bootstrap 3.3.7
* jQuery 3.3.1
* Javascript

## Links

* Github Repo: https://github.com/MattSmithereens/beep
* Github Pages: https://mattsmithereens.github.io/beep/

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Matt Smith**

mattsmithereens@gmail.com
