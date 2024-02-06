import http from "@/http";

class getData {
    server = async (urlResource: string, errorMessage = "Something went wrong!") => {
        const res = await http.get(urlResource);
        if (res.status !== 200) throw new Error(errorMessage);
        return res.data;
    }
    client = async (urlResource: string, setState: (data: any) => void, errorMessage = "Something went wrong!") => {
        try {
            const response = await http.get(urlResource);

            setState(response.data);
        } catch (error) {
            console.log(error)
        }
    }
}

export default new getData()

