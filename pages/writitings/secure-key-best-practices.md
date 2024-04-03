# What Makes a Good Password?
2024-04-03

## Context
### A Ficticious Scenario
A ficticious client, at a ficticious company, has asked that their encryption tool conform to company guidelines:
- Requested Password Requirements:
	- Minimum 14 characters
	- Contain *at least 3* of the following **uppercase**, **lowercase**, **numbers**, and **special characters**.  
	- Avoid using dictionary words

### A response
The letter below makes the case that the guidelines do more harm than good.   

---

Hi Samanatha,

The encryption tool gives the user a choice between three types of secure keys. Each type serves at least one expected use-case: 
1. Randomly generated password:
   - The most secure, difficult to remember.
2. Randomly generated passphrase
    - Less secure, but easier to remember.
3. User manually generated password.
    - Least secure, but most flexible.

Human attempts to generate random passwords produce highly predictable, and therefore, insecure results. A 'good' password tool, on the other hand, generates passwords that are *highly* random. Randomness is an essential feature of a secure password. The tool provides the manual password option because flexibility they allow is necessary in many workflows.

Typcially, in the past, company staff would have always invented passwords manually. In that sitution, the company guidelines would have likely helped compensate for the lack of randomness. However, once people begin to use a tool to generate truly random passwords, the guidelines will become less relevant, and may even be counter-productive.

Of the three types of secure keys, the guidelines are incompatible with types 2 and 3, passphrases and manually generated passwords. 

## Passphrases
Compared to passwords, passphrases are easier to remember. Difficulty in remembering passwords can lead to them being stored insecurely by the user ([Appendix A](https://pages.nist.gov/800-63-3/sp800-63b.html#appA) - A.3 Complexity), so making them easier to remember is good for security. The current CFS guidelines would exclude the use of passphrases. This would have the unintended consequence of introducing a new source of vulnerability.

With appropriate composition rules, passphrases are an appropriate and secure feature. To ensure a passphrase is secure, minimum length should be based on the number of words, rather than the number of characters. 

## User generated passwords
It is not uncommon for an external recipient of data to request a specific password be used. Allowing 'user generated' passwords caters for this.

Unfortunately, a user generated password is likely to have high predictablity. To address this, a combination of the following measures could be applied:
- minimum character length
- screening of the password against a password 'black-list' (e.g., a list of commonly used passwords)
- display a warning/reminder message about the criteria for a good password.
It should be considered how these restrictions could prevent us from meeting the requirements of an external recipeint.

The NIST guidelines recommended *not* to impose any composition requirements other than a minimum length. 
> "users respond in very predictable ways to the requirements imposed by composition rules" 

> "Verifiers SHOULD NOT impose other composition rules (e.g., requiring mixtures of different character types or prohibiting consecutively repeated characters) for memorized secrets."