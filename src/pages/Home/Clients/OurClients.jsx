import useTanstackGet from "../../../hooks/useTanStackGet"
import ClientCard from "./ClientCard";


const OurClients = () => {

    const { data, isLoading } = useTanstackGet(["getClients"], `/api/clients`);


    return <div id="clients" className="mt-20 container mx-auto px-5">

        <h3 className="text-center text-3xl font-bold text-blue-600 ">Our Clients</h3>
        <hr className='w-3/5 mx-auto border-b-2 border-b-blue-400 mt-4' />



        <div className="mt-20">
            {
                isLoading ? <div></div> :

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            data?.map(client => <ClientCard key={client._id} client={client} />)
                        }
                    </div>
            }
        </div>
    </div>
}

export default OurClients