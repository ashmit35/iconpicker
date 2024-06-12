import React, { useState } from 'react';
import * as Icons from 'react-feather';
import "./index.css";

const IconPicker = ({
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight = 500,
    pickerWidth = 500,
    setIsPickerVisible,
    selectedIcon,
    setSelectedIcon
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentIcon, setCurrentIcon] = useState("");
    const iconKeys = Object.keys(Icons);
    const totalIconsInOnePage = rowsInOnePage * columnsInOnePage;
    const totalPages = Math.ceil(iconKeys.length / totalIconsInOnePage);

    const handleIconClick = (Icon) => {
        setSelectedIcon(<Icon />);
    };

    const iconsToDisplay = iconKeys.slice((currentPage - 1) * totalIconsInOnePage, currentPage * totalIconsInOnePage);

    return (
        <div id="icon-picker" className="icon-picker" style={{ width: pickerWidth, height: pickerHeight }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",

            }}>
                <span>Select App Icon</span>
                <div style={{ cursor: "pointer" }} onClick={() => {
                    if (selectedIcon) setSelectedIcon(false);
                    setIsPickerVisible(false)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={index + 1 === currentPage ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <div className="icon-grid">
                {iconsToDisplay.map((iconKey) => {
                    const IconComponent = Icons[iconKey];
                    return (
                        <div
                            key={iconKey}
                            className="icon-container"
                            style={{
                                width: iconWidth,
                                height: iconHeight,
                                backgroundColor: iconKey === currentIcon ? "#00FF00" : "#00aeff"
                            }}
                            onClick={() => {
                                setCurrentIcon(iconKey)
                                handleIconClick(IconComponent)
                            }
                            }

                        >
                            <IconComponent />
                        </div>
                    );
                })}
            </div>

            <div style={{
                display: "flex",
                gap: "15px",
                justifyContent: "end",
                paddingRight: "20px",
                alignItems: 'center',
                marginTop: "10px"
            }}>
                <div onClick={() => {
                    if (selectedIcon) {
                        setSelectedIcon(null);
                    }
                    setIsPickerVisible(false)
                }}
                    style={{ color: "gray", cursor: "pointer" }}>Cancel
                </div>

                <div onClick={() => {
                    if (selectedIcon !== null) {
                        setIsPickerVisible(false);
                    } else {
                        alert("Please select an icon");
                    }
                }}
                    style={{
                        padding: "8px 30px",
                        backgroundColor: "#0ba6ff",
                        borderRadius: 5,
                        color: "white",
                        cursor: "pointer"
                    }}>
                    Done
                </div>
            </div>

            {currentIcon && (
                <div style={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center", marginTop: "15px" }}>
                    Icon selected
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
            )}
        </div>
    );
};

export default IconPicker;
