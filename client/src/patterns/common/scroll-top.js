import { useEffect } from "react";

export default function ScrollToTopOnMount() {
    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);

    return null;
}
