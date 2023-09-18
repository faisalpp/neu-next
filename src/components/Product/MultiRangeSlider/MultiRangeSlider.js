import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";
import DropDown from "../../DeskComp/Filter/DropDown";

const MultiRangeSlider = ({ min, max, onChange }) => {
    const defaultMinval = 999;
    const defaultMaxval = 8000;
    const [minVal, setMinVal] = useState(defaultMinval);
    const [maxVal, setMaxVal] = useState(defaultMaxval);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <DropDown title="Price">
            <div className="w-full pb-8 relative" id="priceSlider">
                <div className="flex items-center gap-2 w-full mb-5">
                    <input type="number" value={minVal} onChange={(event) => {
                        const value = Math.min(Math.max(+event.target.value, min), max);
                        setMinVal(value);
                    }} className="w-[45%] m-0 rounded-md text-b16 px-4 py-2 outline-none border border-[#C9C9C9]" />
                    <span>-</span>
                    <input type="number" value={maxVal} onChange={(event) => {
                        const value = Math.min(Math.max(+event.target.value, min), max);
                        setMaxVal(value);
                    }} className="w-[45%] m-0 rounded-md text-b16 px-4 py-2 outline-none border border-[#C9C9C9]" />
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        setMinVal(value);
                        event.target.value = value.toString();
                    }}
                    className={classnames("thumb thumb--zindex-3", {
                        "thumb--zindex-5": minVal > max - 100
                    })}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    ref={maxValRef}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        setMaxVal(value);
                        event.target.value = value.toString();
                    }}
                    className="thumb thumb--zindex-4"
                />

                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                    <div className="flex justify-between absolute left-1 right-1 top-4 text-xs">
                        <div className="">{min}</div>
                        <div className="">99</div>
                        <div className="">999</div>
                        <div className="">{max}</div>
                    </div>
                </div>
            </div>
        </DropDown>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
