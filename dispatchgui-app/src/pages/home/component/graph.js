const Graph = () => {

    //#region 
    let startpos = document.getElementById('start')

    let store1 = document.getElementById('store1')
    let store2 = document.getElementById('store2')
    let store3 = document.getElementById('store3')

    let A1 = document.getElementById('A1')
    let A2 = document.getElementById('A2')
    let B1 = document.getElementById('B1')
    let B2 = document.getElementById('B2')
    let B3 = document.getElementById('B3')
    let C1 = document.getElementById('C1')
    let C2 = document.getElementById('C2')
    let C3 = document.getElementById('C3')

    let P11 = document.getElementById('p1-1')
    let P12 = document.getElementById('p1-2')
    let P13 = document.getElementById('p1-3')
    let P14 = document.getElementById('p1-4')
    let P15 = document.getElementById('p1-5')
    let P16 = document.getElementById('p1-6')
    let P17 = document.getElementById('p1-7')

    let P21 = document.getElementById('p2-1')
    let P22 = document.getElementById('p2-2')
    let P23 = document.getElementById('p2-3')
    let P24 = document.getElementById('p2-4')
    let P25 = document.getElementById('p2-5')
    let P26 = document.getElementById('p2-6')

    let P31 = document.getElementById('p3-1')
    let P32 = document.getElementById('p3-2')
    let P33 = document.getElementById('p3-3')
    let P34 = document.getElementById('p3-4')
    let P35 = document.getElementById('p3-5')

    let P41 = document.getElementById('p4-1')
    let P42 = document.getElementById('p4-2')
    let P43 = document.getElementById('p4-3')
    let P44 = document.getElementById('p4-4')
    let P45 = document.getElementById('p4-5')

    LightEffect(startpos)

    LightEffect(store1)
    LightEffect(store2)
    LightEffect(store3)

    LightEffect(A1)
    LightEffect(A2)
    LightEffect(B1)
    LightEffect(B2)
    LightEffect(B3)
    LightEffect(C1)
    LightEffect(C2)
    LightEffect(C3)

    LightEffect(P11)
    LightEffect(P12)
    LightEffect(P13)
    LightEffect(P14)
    LightEffect(P15)
    LightEffect(P16)
    LightEffect(P17)

    LightEffect(P21)
    LightEffect(P22)
    LightEffect(P23)
    LightEffect(P24)
    LightEffect(P25)
    LightEffect(P26)

    LightEffect(P31)
    LightEffect(P32)
    LightEffect(P33)
    LightEffect(P34)
    LightEffect(P35)

    LightEffect(P41)
    LightEffect(P42)
    LightEffect(P43)
    LightEffect(P44)
    LightEffect(P45)
    //#endregion

    function LightEffect(Light) {
        // let isLight = false
        // isLight = !isLight;

        // if (isLight) {
        //     //是否更明亮（白光） 默認否
        //     let lighter = false;
        //     let time = setInterval(function () {
        //         lighter = !lighter;

        //         if (lighter) {
        //             // Light.style.background = "#ff0000"
        //             Light.style.boxShadow = "0 0 0 0";

        //         } else {
        //             // Light.style.background = "#ffff00"
        //             Light.style.boxShadow = "0 0 10px 10px #ffffff";
        //         }
        //     }, 1000);
        //     // console.log(time)
        // }
    }
    return (

        <div className="item_layout">

            <div className="item_layout_grid item_layout_1_1">
            </div>
            <div className="item_layout_grid item_layout_1_2">

            </div>
            <div className="item_layout_grid item_layout_1_3">
                <canvas className="point" id="p4-1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_4">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_5">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_6">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_7">
                <canvas className="point" id="p3-1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_8">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_9">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_10">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_11">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_12">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_13">
                <canvas className="point" id="p2-1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_14">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_15">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_16">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_17">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_18">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_19">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_1_20">
                <canvas className="point" id="p1-1"></canvas>
            </div>


            <div className="item_layout_grid item_layout_2_1">

            </div>
            <div className="item_layout_grid item_layout_2_2">

            </div>
            <div className="item_layout_grid item_layout_2_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_2_4">

            </div>
            <div className="item_layout_grid item_layout_2_5">

            </div>
            <div className="item_layout_grid item_layout_2_6">

            </div>
            <div className="item_layout_grid item_layout_2_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_2_8">

            </div>
            <div className="item_layout_grid item_layout_2_9">

            </div>
            <div className="item_layout_grid item_layout_2_10">

            </div>
            <div className="item_layout_grid item_layout_2_11">

            </div>
            <div className="item_layout_grid item_layout_2_12">

            </div>
            <div className="item_layout_grid item_layout_2_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_2_14">

            </div>
            <div className="item_layout_grid item_layout_2_15">

            </div>
            <div className="item_layout_grid item_layout_2_16">

            </div>
            <div className="item_layout_grid item_layout_2_17">

            </div>
            <div className="item_layout_grid item_layout_2_18">

            </div>
            <div className="item_layout_grid item_layout_2_19">

            </div>
            <div className="item_layout_grid item_layout_2_20">
                <canvas className="line-ver"></canvas>
            </div>


            <div className="item_layout_grid item_layout_3_1">
                <canvas className="station" id="C1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_2">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_3">
                <canvas className="point" id="p4-2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_4">

            </div>
            <div className="item_layout_grid item_layout_3_5">

            </div>
            <div className="item_layout_grid item_layout_3_6">

            </div>
            <div className="item_layout_grid item_layout_3_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_8">

            </div>
            <div className="item_layout_grid item_layout_3_9">

            </div>
            <div className="item_layout_grid item_layout_3_10">

            </div>
            <div className="item_layout_grid item_layout_3_11">

            </div>
            <div className="item_layout_grid item_layout_3_12">

            </div>
            <div className="item_layout_grid item_layout_3_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_14">

            </div>
            <div className="item_layout_grid item_layout_3_15">

            </div>
            <div className="item_layout_grid item_layout_3_16">

            </div>
            <div className="item_layout_grid item_layout_3_17">
                <canvas className="station" id="start"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_18">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_19">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_3_20">
                <canvas className="point" id="p1-2"></canvas>
            </div>


            <div className="item_layout_grid item_layout_4_1">

            </div>
            <div className="item_layout_grid item_layout_4_2">
                <span className="textarea">C1</span>
            </div>
            <div className="item_layout_grid item_layout_4_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_4_4">

            </div>
            <div className="item_layout_grid item_layout_4_5">

            </div>
            <div className="item_layout_grid item_layout_4_6">

            </div>
            <div className="item_layout_grid item_layout_4_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_4_8">

            </div>
            <div className="item_layout_grid item_layout_4_9">

            </div>
            <div className="item_layout_grid item_layout_4_10">

            </div>
            <div className="item_layout_grid item_layout_4_11">

            </div>
            <div className="item_layout_grid item_layout_4_12">

            </div>
            <div className="item_layout_grid item_layout_4_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_4_14">

            </div>
            <div className="item_layout_grid item_layout_4_15">

            </div>
            <div className="item_layout_grid item_layout_4_16">

            </div>
            <div className="item_layout_grid item_layout_4_17">

            </div>
            <div className="item_layout_grid item_layout_4_18">
                <span className="textarea">CS</span>
            </div>
            <div className="item_layout_grid item_layout_4_19">

            </div>
            <div className="item_layout_grid item_layout_4_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_5_1">

            </div>
            <div className="item_layout_grid item_layout_5_2">

            </div>
            <div className="item_layout_grid item_layout_5_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_5_4">

            </div>
            <div className="item_layout_grid item_layout_5_5">
                <canvas className="station" id="B1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_5_6">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_5_7">
                <canvas className="point" id="p3-2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_5_8">

            </div>
            <div className="item_layout_grid item_layout_5_9">

            </div>
            <div className="item_layout_grid item_layout_5_10">

            </div>
            <div className="item_layout_grid item_layout_5_11">

            </div>
            <div className="item_layout_grid item_layout_5_12">

            </div>
            <div className="item_layout_grid item_layout_5_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_5_14">

            </div>
            <div className="item_layout_grid item_layout_5_15">

            </div>
            <div className="item_layout_grid item_layout_5_16">

            </div>
            <div className="item_layout_grid item_layout_5_17">

            </div>
            <div className="item_layout_grid item_layout_5_18">
                <canvas className="station" id="store1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_5_19">
                <canvas className="line-hor"></canvas>
                <span className="textarea">S1</span>
            </div>
            <div className="item_layout_grid item_layout_5_20">
                <canvas className="point" id="p1-3"></canvas>
            </div>

            <div className="item_layout_grid item_layout_6_1">

            </div>
            <div className="item_layout_grid item_layout_6_2">

            </div>
            <div className="item_layout_grid item_layout_6_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_6_4">

            </div>
            <div className="item_layout_grid item_layout_6_5">

            </div>
            <div className="item_layout_grid item_layout_6_6">
                <span className="textarea">B1</span>
            </div>
            <div className="item_layout_grid item_layout_6_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_6_8">

            </div>
            <div className="item_layout_grid item_layout_6_9">

            </div>
            <div className="item_layout_grid item_layout_6_10">

            </div>
            <div className="item_layout_grid item_layout_6_11">

            </div>
            <div className="item_layout_grid item_layout_6_12">

            </div>
            <div className="item_layout_grid item_layout_6_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_6_14">

            </div>
            <div className="item_layout_grid item_layout_6_15">

            </div>
            <div className="item_layout_grid item_layout_6_16">

            </div>
            <div className="item_layout_grid item_layout_6_17">

            </div>
            <div className="item_layout_grid item_layout_6_18">
                <canvas className="station" id="store2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_6_19">
                <canvas className="line-hor"></canvas>
                <span className="textarea">S2</span>
            </div>
            <div className="item_layout_grid item_layout_6_20">
                <canvas className="point" id="p1-4"></canvas>
            </div>

            <div className="item_layout_grid item_layout_7_1">

            </div>
            <div className="item_layout_grid item_layout_7_2">

            </div>
            <div className="item_layout_grid item_layout_7_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_7_4">

            </div>
            <div className="item_layout_grid item_layout_7_5">

            </div>
            <div className="item_layout_grid item_layout_7_6">

            </div>
            <div className="item_layout_grid item_layout_7_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_7_8">

            </div>
            <div className="item_layout_grid item_layout_7_9">

            </div>
            <div className="item_layout_grid item_layout_7_10">

            </div>
            <div className="item_layout_grid item_layout_7_11">

            </div>
            <div className="item_layout_grid item_layout_7_12">

            </div>
            <div className="item_layout_grid item_layout_7_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_7_14">

            </div>
            <div className="item_layout_grid item_layout_7_15">

            </div>
            <div className="item_layout_grid item_layout_7_16">

            </div>
            <div className="item_layout_grid item_layout_7_17">

            </div>
            <div className="item_layout_grid item_layout_7_18">
                <canvas className="station" id="store3"></canvas>
            </div>
            <div className="item_layout_grid item_layout_7_19">
                <canvas className="line-hor"></canvas>
                <span className="textarea">S3</span>
            </div>
            <div className="item_layout_grid item_layout_7_20">
                <canvas className="point" id="p1-5"></canvas>
            </div>

            <div className="item_layout_grid item_layout_8_1">

            </div>
            <div className="item_layout_grid item_layout_8_2">

            </div>
            <div className="item_layout_grid item_layout_8_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_8_4">

            </div>
            <div className="item_layout_grid item_layout_8_5">

            </div>
            <div className="item_layout_grid item_layout_8_6">

            </div>
            <div className="item_layout_grid item_layout_8_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_8_8">

            </div>
            <div className="item_layout_grid item_layout_8_9">

            </div>
            <div className="item_layout_grid item_layout_8_10">

            </div>
            <div className="item_layout_grid item_layout_8_11">

            </div>
            <div className="item_layout_grid item_layout_8_12">

            </div>
            <div className="item_layout_grid item_layout_8_13">
                <canvas className="point" id="p2-2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_8_14">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_8_15">
                <canvas className="station" id="A1"></canvas>
            </div>
            <div className="item_layout_grid item_layout_8_16">

            </div>
            <div className="item_layout_grid item_layout_8_17">

            </div>
            <div className="item_layout_grid item_layout_8_18">

            </div>
            <div className="item_layout_grid item_layout_8_19">

            </div>
            <div className="item_layout_grid item_layout_8_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_9_1">
                <canvas className="station" id="C2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_2">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_3">
                <canvas className="point" id="p4-3"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_4">

            </div>
            <div className="item_layout_grid item_layout_9_5">
                <canvas className="station" id="B2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_6">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_7">
                <canvas className="point" id="p3-3"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_8">

            </div>
            <div className="item_layout_grid item_layout_9_9">

            </div>
            <div className="item_layout_grid item_layout_9_10">

            </div>
            <div className="item_layout_grid item_layout_9_11">

            </div>
            <div className="item_layout_grid item_layout_9_12">

            </div>
            <div className="item_layout_grid item_layout_9_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_9_14">

            </div>
            <div className="item_layout_grid item_layout_9_15">

            </div>
            <div className="item_layout_grid item_layout_9_16">
                <span className="textarea">A1</span>
            </div>
            <div className="item_layout_grid item_layout_9_17">

            </div>
            <div className="item_layout_grid item_layout_9_18">

            </div>
            <div className="item_layout_grid item_layout_9_19">

            </div>
            <div className="item_layout_grid item_layout_9_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_10_1">

            </div>
            <div className="item_layout_grid item_layout_10_2">
                <span className="textarea">C2</span>
            </div>
            <div className="item_layout_grid item_layout_10_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_10_4">

            </div>
            <div className="item_layout_grid item_layout_10_5">

            </div>
            <div className="item_layout_grid item_layout_10_6">
                <span className="textarea">B2</span>
            </div>
            <div className="item_layout_grid item_layout_10_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_10_8">

            </div>
            <div className="item_layout_grid item_layout_10_9">

            </div>
            <div className="item_layout_grid item_layout_10_10">

            </div>
            <div className="item_layout_grid item_layout_10_11">

            </div>
            <div className="item_layout_grid item_layout_10_12">

            </div>
            <div className="item_layout_grid item_layout_10_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_10_14">

            </div>
            <div className="item_layout_grid item_layout_10_15">

            </div>
            <div className="item_layout_grid item_layout_10_16">

            </div>
            <div className="item_layout_grid item_layout_10_17">

            </div>
            <div className="item_layout_grid item_layout_10_18">

            </div>
            <div className="item_layout_grid item_layout_10_19">

            </div>
            <div className="item_layout_grid item_layout_10_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_11_1">
                <canvas className="station" id="C3"></canvas>
            </div>
            <div className="item_layout_grid item_layout_11_2">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_11_3">
                <canvas className="point" id="p4-4"></canvas>
            </div>
            <div className="item_layout_grid item_layout_11_4">

            </div>
            <div className="item_layout_grid item_layout_11_5">

            </div>
            <div className="item_layout_grid item_layout_11_6">

            </div>
            <div className="item_layout_grid item_layout_11_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_11_8">

            </div>
            <div className="item_layout_grid item_layout_11_9">

            </div>
            <div className="item_layout_grid item_layout_11_10">

            </div>
            <div className="item_layout_grid item_layout_11_11">

            </div>
            <div className="item_layout_grid item_layout_11_12">

            </div>
            <div className="item_layout_grid item_layout_11_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_11_14">

            </div>
            <div className="item_layout_grid item_layout_11_15">

            </div>
            <div className="item_layout_grid item_layout_11_16">

            </div>
            <div className="item_layout_grid item_layout_11_17">

            </div>
            <div className="item_layout_grid item_layout_11_18">

            </div>
            <div className="item_layout_grid item_layout_11_19">

            </div>
            <div className="item_layout_grid item_layout_11_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_12_1">

            </div>
            <div className="item_layout_grid item_layout_12_2">
                <span className="textarea">C3</span>
            </div>
            <div className="item_layout_grid item_layout_12_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_12_4">

            </div>
            <div className="item_layout_grid item_layout_12_5">

            </div>
            <div className="item_layout_grid item_layout_12_6">

            </div>
            <div className="item_layout_grid item_layout_12_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_12_8">

            </div>
            <div className="item_layout_grid item_layout_12_9">

            </div>
            <div className="item_layout_grid item_layout_12_10">

            </div>
            <div className="item_layout_grid item_layout_12_11">

            </div>
            <div className="item_layout_grid item_layout_12_12">

            </div>
            <div className="item_layout_grid item_layout_12_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_12_14">

            </div>
            <div className="item_layout_grid item_layout_12_15">

            </div>
            <div className="item_layout_grid item_layout_12_16">

            </div>
            <div className="item_layout_grid item_layout_12_17">

            </div>
            <div className="item_layout_grid item_layout_12_18">

            </div>
            <div className="item_layout_grid item_layout_12_19">

            </div>
            <div className="item_layout_grid item_layout_12_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_13_1">

            </div>
            <div className="item_layout_grid item_layout_13_2">

            </div>
            <div className="item_layout_grid item_layout_13_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_4">

            </div>
            <div className="item_layout_grid item_layout_13_5">
                <canvas className="station" id="B3"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_6">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_7">
                <canvas className="point" id="p3-4"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_8">

            </div>
            <div className="item_layout_grid item_layout_13_9">

            </div>
            <div className="item_layout_grid item_layout_13_10">

            </div>
            <div className="item_layout_grid item_layout_13_11">

            </div>
            <div className="item_layout_grid item_layout_13_12">

            </div>
            <div className="item_layout_grid item_layout_13_13">
                <canvas className="point" id="p2-3"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_14">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_15">
                <canvas className="station" id="A2"></canvas>
            </div>
            <div className="item_layout_grid item_layout_13_16">

            </div>
            <div className="item_layout_grid item_layout_13_17">

            </div>
            <div className="item_layout_grid item_layout_13_18">

            </div>
            <div className="item_layout_grid item_layout_13_19">

            </div>
            <div className="item_layout_grid item_layout_13_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_14_1">

            </div>
            <div className="item_layout_grid item_layout_14_2">

            </div>
            <div className="item_layout_grid item_layout_14_3">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_14_4">

            </div>
            <div className="item_layout_grid item_layout_14_5">

            </div>
            <div className="item_layout_grid item_layout_14_6">
                <span className="textarea">B3</span>
            </div>
            <div className="item_layout_grid item_layout_14_7">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_14_8">

            </div>
            <div className="item_layout_grid item_layout_14_9">

            </div>
            <div className="item_layout_grid item_layout_14_10">

            </div>
            <div className="item_layout_grid item_layout_14_11">

            </div>
            <div className="item_layout_grid item_layout_14_12">

            </div>
            <div className="item_layout_grid item_layout_14_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_14_14">

            </div>
            <div className="item_layout_grid item_layout_14_15">

            </div>
            <div className="item_layout_grid item_layout_14_16">
                <span className="textarea">A2</span>
            </div>
            <div className="item_layout_grid item_layout_14_17">

            </div>
            <div className="item_layout_grid item_layout_14_18">

            </div>
            <div className="item_layout_grid item_layout_14_19">

            </div>
            <div className="item_layout_grid item_layout_14_20">
                <canvas className="line-ver"></canvas>
            </div>

            <div className="item_layout_grid item_layout_15_1">

            </div>
            <div className="item_layout_grid item_layout_15_2">

            </div>
            <div className="item_layout_grid item_layout_15_3">
                <canvas className="point" id="p4-5"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_4">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_5">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_6">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_7">
                <canvas className="point" id="p3-5"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_8">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_9">
                <canvas className="point" id="p2-6"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_10">

            </div>
            <div className="item_layout_grid item_layout_15_11">

            </div>
            <div className="item_layout_grid item_layout_15_12">

            </div>
            <div className="item_layout_grid item_layout_15_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_15_14">

            </div>
            <div className="item_layout_grid item_layout_15_15">

            </div>
            <div className="item_layout_grid item_layout_15_16">

            </div>
            <div className="item_layout_grid item_layout_15_17">

            </div>
            <div className="item_layout_grid item_layout_15_18">

            </div>
            <div className="item_layout_grid item_layout_15_19">

            </div>
            <div className="item_layout_grid item_layout_15_20">
                <canvas className="point" id="p1-6"></canvas>
            </div>

            <div className="item_layout_grid item_layout_16_1">

            </div>
            <div className="item_layout_grid item_layout_16_2">

            </div>
            <div className="item_layout_grid item_layout_16_3">

            </div>
            <div className="item_layout_grid item_layout_16_4">

            </div>
            <div className="item_layout_grid item_layout_16_5">

            </div>
            <div className="item_layout_grid item_layout_16_6">

            </div>
            <div className="item_layout_grid item_layout_16_7">

            </div>
            <div className="item_layout_grid item_layout_16_8">

            </div>
            <div className="item_layout_grid item_layout_16_9">

            </div>
            <div className="item_layout_grid item_layout_16_10">
                <canvas className="line-transfer-l"></canvas>
            </div>
            <div className="item_layout_grid item_layout_16_11">

            </div>
            <div className="item_layout_grid item_layout_16_12">

            </div>
            <div className="item_layout_grid item_layout_16_13">
                <canvas className="line-ver"></canvas>
            </div>
            <div className="item_layout_grid item_layout_16_14">

            </div>
            <div className="item_layout_grid item_layout_16_15">

            </div>
            <div className="item_layout_grid item_layout_16_16">

            </div>
            <div className="item_layout_grid item_layout_16_17">

            </div>
            <div className="item_layout_grid item_layout_16_18">

            </div>
            <div className="item_layout_grid item_layout_16_19">
                <canvas className="line-transfer-r"></canvas>
            </div>
            <div className="item_layout_grid item_layout_16_20">

            </div>

            <div className="item_layout_grid item_layout_17_1">

            </div>
            <div className="item_layout_grid item_layout_17_2">

            </div>
            <div className="item_layout_grid item_layout_17_3">

            </div>
            <div className="item_layout_grid item_layout_17_4">

            </div>
            <div className="item_layout_grid item_layout_17_5">

            </div>
            <div className="item_layout_grid item_layout_17_6">

            </div>
            <div className="item_layout_grid item_layout_17_7">

            </div>
            <div className="item_layout_grid item_layout_17_8">

            </div>
            <div className="item_layout_grid item_layout_17_9">

            </div>
            <div className="item_layout_grid item_layout_17_10">

            </div>
            <div className="item_layout_grid item_layout_17_11">
                <canvas className="point" id="p2-5"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_12">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_13">
                <canvas className="point" id="p2-4"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_14">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_15">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_16">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_17">
                <canvas className="line-hor"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_18">
                <canvas className="point" id="p1-7"></canvas>
            </div>
            <div className="item_layout_grid item_layout_17_19">

            </div>
            <div className="item_layout_grid item_layout_17_20">

            </div>

            <div className="item_layout_grid item_layout_18_1">

            </div>
            <div className="item_layout_grid item_layout_18_2">

            </div>
            <div className="item_layout_grid item_layout_18_3">

            </div>
            <div className="item_layout_grid item_layout_18_4">

            </div>
            <div className="item_layout_grid item_layout_18_5">

            </div>
            <div className="item_layout_grid item_layout_18_6">

            </div>
            <div className="item_layout_grid item_layout_18_7">

            </div>
            <div className="item_layout_grid item_layout_18_8">

            </div>
            <div className="item_layout_grid item_layout_18_9">

            </div>
            <div className="item_layout_grid item_layout_18_10">

            </div>
            <div className="item_layout_grid item_layout_18_11">

            </div>
            <div className="item_layout_grid item_layout_18_12">

            </div>
            <div className="item_layout_grid item_layout_18_13">

            </div>
            <div className="item_layout_grid item_layout_18_14">

            </div>
            <div className="item_layout_grid item_layout_18_15">

            </div>
            <div className="item_layout_grid item_layout_18_16">

            </div>
            <div className="item_layout_grid item_layout_18_17">

            </div>
            <div className="item_layout_grid item_layout_18_18">

            </div>
            <div className="item_layout_grid item_layout_18_19">

            </div>
            <div className="item_layout_grid item_layout_18_20">

            </div>

            <div className="item_layout_grid item_layout_19_1">

            </div>
            <div className="item_layout_grid item_layout_19_2">

            </div>
            <div className="item_layout_grid item_layout_19_3">

            </div>
            <div className="item_layout_grid item_layout_19_4">

            </div>
            <div className="item_layout_grid item_layout_19_5">

            </div>
            <div className="item_layout_grid item_layout_19_6">

            </div>
            <div className="item_layout_grid item_layout_19_7">

            </div>
            <div className="item_layout_grid item_layout_19_8">

            </div>
            <div className="item_layout_grid item_layout_19_9">

            </div>
            <div className="item_layout_grid item_layout_19_10">

            </div>
            <div className="item_layout_grid item_layout_19_11">

            </div>
            <div className="item_layout_grid item_layout_19_12">

            </div>
            <div className="item_layout_grid item_layout_19_13">

            </div>
            <div className="item_layout_grid item_layout_19_14">

            </div>
            <div className="item_layout_grid item_layout_19_15">

            </div>
            <div className="item_layout_grid item_layout_19_16">

            </div>
            <div className="item_layout_grid item_layout_19_17">

            </div>
            <div className="item_layout_grid item_layout_19_18">

            </div>
            <div className="item_layout_grid item_layout_19_19">

            </div>
            <div className="item_layout_grid item_layout_19_20">

            </div>

            <div className="item_layout_grid item_layout_20_1">

            </div>
            <div className="item_layout_grid item_layout_20_2">

            </div>
            <div className="item_layout_grid item_layout_20_3">

            </div>
            <div className="item_layout_grid item_layout_20_4">

            </div>
            <div className="item_layout_grid item_layout_20_5">

            </div>
            <div className="item_layout_grid item_layout_20_6">

            </div>
            <div className="item_layout_grid item_layout_20_7">

            </div>
            <div className="item_layout_grid item_layout_20_8">

            </div>
            <div className="item_layout_grid item_layout_20_9">

            </div>
            <div className="item_layout_grid item_layout_20_10">

            </div>
            <div className="item_layout_grid item_layout_20_11">

            </div>
            <div className="item_layout_grid item_layout_20_12">

            </div>
            <div className="item_layout_grid item_layout_20_13">

            </div>
            <div className="item_layout_grid item_layout_20_14">

            </div>
            <div className="item_layout_grid item_layout_20_15">

            </div>
            <div className="item_layout_grid item_layout_20_16">

            </div>
            <div className="item_layout_grid item_layout_20_17">

            </div>
            <div className="item_layout_grid item_layout_20_18">

            </div>
            <div className="item_layout_grid item_layout_20_19">

            </div>
            <div className="item_layout_grid item_layout_20_20">

            </div>
        </div>
    );
};

export default Graph;