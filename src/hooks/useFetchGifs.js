import {getGifts} from "../helpers/getGifs";
import {useEffect, useState} from "react";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const setNewImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        setNewImages(category);
    }, []);

    return  {
        images,
        isLoading
    }
};