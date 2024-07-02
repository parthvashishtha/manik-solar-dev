'use client';

import { useState } from "react";
import { BooleanContext } from "../context";

export default function BooleanProvider({children}) {
    const [english, setEnglish] = useState(false);

    return(
        <BooleanContext.Provider value={{english, setEnglish}}>
            {children}
        </BooleanContext.Provider>
    )
}

