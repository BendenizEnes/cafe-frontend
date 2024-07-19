import styled from 'styled-components';

const Chairs = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 30px;
    border: 2px solid #252a3a;
    background: black`

function TableContainer({person, status, children , ...props}) {
    if(person === 2) {
        return (
            <div className={`relative size-1/2`} {...props}>
                <div
                    className={`shadow-[0px_10px_10px_3px_rgba(0,0,0,0.3)] relative bg-white rounded-2xl w-full h-full text-3xl z-10 font-bold text-center flex flex-col items-center justify-center`}>
                    <div>{children}</div>
                    <div>Capacity {person}</div>
                </div>
                <Chairs className="top-[-80px] left-[155px] z-0"/>
                <Chairs className="bottom-[-80px] left-[155px] z-0"/>

            </div>);
    }else if(person === 4 ){
        return  <div className={`relative size-1/2`} {...props}>
            <div className={`shadow-[0px_10px_10px_3px_rgba(0,0,0,0.3)] relative bg-white  rounded-2xl w-full h-full text-3xl z-10 font-bold text-center flex flex-col items-center justify-center`}>
                <div>{children}</div>
                <div>Capacity {person}</div>
            </div>
            <Chairs className="top-[-80px] left-[155px] z-0"/>
            <Chairs className="bottom-[-80px] left-[155px] z-0"/>
            <Chairs className="top-[70px] right-[-80px] z-0"/>
            <Chairs className="top-[70px] left-[-80px] z-0"/>
        </div>;
    }else if(person === 6 ){
        return <div className={`relative size-1/2`} {...props}>
                    <div className={`shadow-[0px_10px_10px_3px_rgba(0,0,0,0.3)] relative bg-white rounded-2xl w-full h-full text-3xl z-10 font-bold text-center flex flex-col items-center justify-center`}>
                        <div>{children}</div>
                        <div>Capacity {person}</div>
                    </div>
                    <Chairs className="top-[-80px] left-[50px] z-0"/>
                    <Chairs className="bottom-[-80px] left-[50px] z-0"/>
                    <Chairs className="top-[-80px] right-[50px] z-0"/>
                    <Chairs className="bottom-[-80px] right-[50px] z-0"/>
                    <Chairs className="top-[70px] right-[-80px] z-0"/>
                    <Chairs className="top-[70px] left-[-80px] z-0"/>
        </div>;
    }else if(person === 8 ){
        return <div className={`relative w-3/4 h-1/2`} {...props}>
            <div className={`shadow-[0px_10px_10px_3px_rgba(0,0,0,0.3)] relative bg-white rounded-2xl w-full h-full text-3xl z-10 font-bold text-center flex flex-col items-center justify-center`}>
                <div>{children}</div>
                <div>Capacity {person}</div>
            </div>
            <Chairs className="top-[-80px] left-[50px] z-0"/>
            <Chairs className="bottom-[-80px] left-[50px] z-0"/>
            <Chairs className="top-[-80px] right-[270px] z-0"/>
            <Chairs className="bottom-[-80px] right-[270px] z-0"/>
            <Chairs className="top-[-80px] right-[50px] z-0"/>
            <Chairs className="bottom-[-80px] right-[50px] z-0"/>
            <Chairs className="top-[70px] right-[-80px] z-0"/>
            <Chairs className="top-[70px] left-[-80px] z-0"/>
        </div>;
    }else if(person === 10 ){
        return <div className={`relative w-4/5 h-1/2`} {...props}>
            <div className={`shadow-[0px_10px_10px_3px_rgba(0,0,0,0.3)] relative bg-white rounded-2xl w-full h-full text-3xl z-10 font-bold text-center flex flex-col items-center justify-center`}>
                <div>{children}</div>
                <div>Capacity {person}</div>
            </div>
            <Chairs className="top-[-80px] left-[36px] z-0"/>
            <Chairs className="bottom-[-80px] left-[36px] z-0"/>
            <Chairs className="top-[-80px] right-[36px] z-0"/>
            <Chairs className="bottom-[-80px] right-[36px] z-0"/>
            <Chairs className="top-[-80px] right-[208px] z-0"/>
            <Chairs className="bottom-[-80px] right-[208px] z-0"/>
            <Chairs className="top-[-80px] left-[208px] z-0"/>
            <Chairs className="bottom-[-80px] left-[208px] z-0"/>
            <Chairs className="top-[70px] right-[-80px] z-0"/>
            <Chairs className="top-[70px] left-[-80px] z-0"/>
        </div>;
    }
}


function TableReservation({status,person,name}) {

    return (
        <TableContainer person={person} status={status}>
            {name}
        </TableContainer>
    );
}

export default TableReservation;