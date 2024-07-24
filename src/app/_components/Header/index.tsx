/* eslint-disable @next/next/no-img-element */
// _components/Header.tsx

import React from 'react';
import type { Header as HeaderType } from '../../../payload/payload-types';




import Link from 'next/link'

import { fetchHeader } from '../../_api/fetchGlobals';
import HeaderComponent from './HeaderComponent';


export async function HeaderFunction() {
    let header: HeaderType | null = null;

    try {
        header = await fetchHeader();
    } catch (error) {
        console.log(error);
    }

    return (
        <>
            <HeaderComponent header={header} />
        </>
    );
}
