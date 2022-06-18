const easyMap = {
    "If": "00268-easy-if",
    "HelloWorld": "00013-warm-hello-world",
    "Pick": "00004-easy-pick",
    "Readonly": "00007-easy-readonly",
    "TupletoObject": "00011-easy-tuple-to-object",
    "FirstofArray": "00014-easy-first",
    "LengthofTuple":"00018-easy-tuple-length",
    "Exclude":"00043-easy-exclude",
    "Awaited":"Awaited",
    "Concat":"00533-easy-concat",
    "Includes": "00898-easy-includes",
    "Push":"03057-easy-push",
    "Unshift": "03060-easy-unshift",
    "Parameters": "03312-easy-parameters"
}

const mediumMap = {
    "GetReturnType": "00002-medium-return-type",
    "Omit": "00003-medium-omit",
    "Readonly2": "00008-medium-readonly-2",
    "DeepReadonly": "00009-medium-deep-readonly",
    "TupletoUnion": "00010-medium-tuple-to-union",
    "ChainableOptions": "00012-medium-chainable-options",
    "Last of Array": "00015-medium-last",
    "Pop": "00016-medium-pop",
    "Promise.all": "00020-medium-promise-all",
    "TypeLookup": "00062-medium-type-lookup",
    "TrimLeft": "00106-medium-trimleft",
    "Trim": "00108-medium-trim",
    "Capitalize": "00110-medium-capitalize",
    "Replace": "00116-medium-replace",
    "ReplaceAll": "00119-medium-replaceall",
    "AppendArgument": "00191-medium-append-argument",
    "Permutation": "00296-medium-permutation",
    "LengthofString": "00298-medium-length-of-string",
    "Flatten ": "00459-medium-flatten",
    "Appendtoobject": "00527-medium-append-to-object",
    "Absolute": "00529-medium-absolute",
    "String to Union": "00531-medium-string-to-union",
    "Merge": "00599-medium-merge",
    "KebabCase": "00612-medium-kebabcase",
    "Diff": "00645-medium-diff",
    "AnyOf": "00949-medium-anyof",
    "IsNever": "01042-medium-isnever",
    "IsUnion": "01097-medium-isunion",
    "ReplaceKeys": "01130-medium-replacekeys",
    "RemoveIndexSignature": "01367-medium-remove-index-signature",
    "PercentageParser": "01978-medium-percentage-parser",
    "Drop Char": "02070-medium-drop-char",
    "MinusOne": "02257-medium-minusone",
    "PickByType": "02595-medium-pickbytype",
    "StartsWith": "02688-medium-startswith",
    "EndsWith": "02693-medium-endswith",
    "PartialByKeys": "02757-medium-partialbykeys",
    "RequiredByKeys": "02759-medium-requiredbykeys",
    "Mutable": "02793-medium-mutable",
    "OmitByType": "02852-medium-omitbytype",
    "ObjectEntries": "02946-medium-objectentries",
    "Shift": "03062-medium-shift",
    "TupletoNestedObject": "03188-medium-tuple-to-nested-object",
    "Reverse": "03192-medium-reverse",
    "FlipArguments": "03196-medium-flip-arguments",
    "FlattenDepth": "03243-medium-flattendepth",
    "BEM style string": "03326-medium-bem-style-string",
    "InorderTraversal": "03376-medium-inordertraversal",
    "Flip": "04179-medium-flip",
    "FibonacciSequence": "04182-medium-fibonacci-sequence",
    "AllCombinations": "04260-medium-nomiwase",
    "Greater Than": "04425-medium-greater-than",
    "Zip": "04471-medium-zip",
    "IsTuple": "04484-medium-istuple",
    "Chunk": "04499-medium-chunk",
    "Fill": "04518-medium-fill",
    "TrimRight": "04803-medium-trim-right",
    "Without": "05117-medium-without",
    "Trunc": "05140-medium-trunc",
    "IndexOf": "05153-medium-indexof",
    "Join": "05310-medium-join",
    "LastIndexOf": "05317-medium-lastindexof",
    "Unique": "05360-medium-unique",
    "MapTypes": "05821-medium-maptypes",
    "ConstructTuple": "07544-medium-construct-tuple",
    "NumberRange": "08640-medium-number-range",
    "Combination": "08767-medium-combination",
    "Subsequence": "08987-medium-subsequence"
}

const urlMap = {
    ...easyMap,
    ...mediumMap
}
module.exports = urlMap