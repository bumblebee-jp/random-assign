# random-assign

Assigning member(s) randomly

## How to install

```
npm install -g random-assign
```

## Usage

```
random-assign member [extract number]
```

-   Arguments
    -   member : member separated by comma(,). Required.
    -   extract number : integer between 1 and the number of members. Optional. Default is 1.

## Example

```
# Run without extract number
random-assign Makoto,Hiro,Iwasaki

# Result
Next is  Hiro
```

```
# Run with extract number
random-assign Makoto,Hiro,Iwasaki 2

# Result
Next is  Hiro, Iwasaki
```
