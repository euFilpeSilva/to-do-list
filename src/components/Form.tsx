export default function Form() {
    return(
        <div>
            <div className="mb-4 w-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                </label>
                <div className="flex">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    <button>Env</button>
                </div>
            </div>
        </div>
    )
}