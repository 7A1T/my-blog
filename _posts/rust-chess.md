# rust chess

in order to practice my rust skills over the Christmas holidays I set out to create a simple chess program in rust.

## structural rules

A good structure makes for easy debugging. As such I decided to follow most of my old C++ proffesor's styling rules.

the structure of the project revolves around a single function per file with a single purpose. This makes using rust modules a core principle. rust modules can be used in a similar way to c header files where the publicly available functions are declared in one file. 

I'm going to break this single function per file when it comes to testing as I believe having the accompanying test to each function allows a better overview of the logic and faster editing. As such tests will accompany their function.

my target function body is going to aim for under 10 lines. Ideally I want two functions to easily fit in a splitscreen view on my laptop. This should make understanding the code easier (so long as I name my functions well).

## game design

### visualising the game

### taking input

### core game loop

### validating moves

