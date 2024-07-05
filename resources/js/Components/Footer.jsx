import { useMemo } from "react";

export default function Footer(){

    const currentYear = useMemo(() => (new Date().getFullYear()));

    return(
        <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs/relaxed text-gray-500">
                © Funky Frontend {currentYear}. All rights reserved.
            </p>
        </div>
    );
}