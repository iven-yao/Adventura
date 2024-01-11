import React, { useState } from "react";
import styled from "styled-components";
import userIcon from "../ui/user.png"

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Dashboard", "Settings", "Sign out"];

export default function User() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <>
            <DropDownContainer>
                <button className="inline-flex items-center bg-white-500 border-0 rounded-full py-2 px-4" onClick={toggling}>
                    <img className="w-8 h-8 rounded-full" src={userIcon} alt="user photo"></img>
                </button>
                {isOpen && (
                    <div className="bg-gray-700 text-white">
                        {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </div>
                )}
            </DropDownContainer>
        </>
    );
}