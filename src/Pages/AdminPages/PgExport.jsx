import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import BuildAnimation from '../../Components/Lotties/BuildAnimation';
import { QuanLyPhimActions } from '../../Redux/Slices/QuanLyPhimSlice';

export default function PgExport() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(QuanLyPhimActions.setActiveKeyAction(4));
    }, []);
    return (
        <div>
            <BuildAnimation />
            <p className="font-bold text-black text-3xl text-center" >Website đang được xây dựng. Bạn quay lại sau nhé</p>
        </div>
    )
}
