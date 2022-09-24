import React, { useState } from 'react';

const Control = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const handleClick1 = () => {
        setIsActive1(current => !current);
        console.log('isActive1 : ', isActive1)
    };

    const handleClick2 = () => {
        setIsActive2(current => !current);
        console.log('isActive2 : ', isActive2)
    };

    return (
        <div className="item_sendmsg">
            <button className="accordion" onClick={handleClick1}>Taxi Service</button>
            <div style={{ display: isActive1 ? 'block' : 'none' }}>
                <div className="sendarea">Choose AMR : </div>

                <select className="combobox" id="AMRs_taxi">
                    <option value="I003MR">TM-50</option>
                    <option value="I002MR">TM-100</option>
                    <option value="I001MR">TM-250</option>
                    <option value="I004MR">LS-50</option>
                    <option value="I005MR">LS-100</option>
                    <option value="I006MR">LS-250</option>
                </select>

                <div className="sendarea">Choose Station : </div>

                <select className="combobox" id="Stations_taxito">
                    <option value="start">CS</option>
                    <option value="store1">S1</option>
                    <option value="store2">S2</option>
                    <option value="store3">S3</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="B3">B3</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                    <option value="C3">C3</option>
                </select>

                <button >Start</button>
            </div>

            

            <button className="accordion" onClick={handleClick2} >Charge Service</button>
            <div style={{ display: isActive2 ? 'block' : 'none' }}>
                <div className="sendarea">Choose AMR : </div>

                <select className="combobox" id="AMRs_charge">
                    <option value="I003MR">TM-50</option>
                    <option value="I002MR">TM-100</option>
                    <option value="I001MR">TM-250</option>
                    <option value="I004MR">LS-50</option>
                    <option value="I005MR">LS-100</option>
                    <option value="I006MR">LS-250</option>
                </select>

                <div className="sendarea">Choose Status : </div>

                <select className="combobox" id="ChargeStation">
                    <option value="GoCharge">Go Charge</option>
                    <option value="StopCharge">Stop Charge</option>
                </select>

                <button >Start</button>
            </div>
        </div>
    );
};

export default Control;