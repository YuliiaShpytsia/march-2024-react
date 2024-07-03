import {useState} from "react";

// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    function toggleValue(valueState: boolean) {
        setValue(prevValue => !valueState);
    }

    return [value, toggleValue];
};

let [value,toggleValue] = useToggle(true);
