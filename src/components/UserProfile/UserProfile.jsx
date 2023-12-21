import { useContext } from "react"
import { UserContext } from "../../context/AuthProvider"

import Swal from 'sweetalert2';


const UserProfile = () => {

    const { user, userLogOut } = useContext(UserContext);


    const handleLogOut = () => {
        Swal.fire({
            title: "Log out?",
            text: "Are you sure want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "red",
            cancelButtonColor: "green",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                userLogOut()
                    .then(() => {
                        window.location.reload();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Logged out!",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
            }
        });
    }


    return <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border border-blue-600">
                <img src={user?.photoURL || "https://i.ibb.co/FKyGxmB/gray-photo-placeholder-icon-design-ui-vector-35850819.webp"} />
            </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] py-5 px-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <p className="text-center font-bold">{user?.displayName}</p>
            <p className="text-center font-semibold mt-3">{user?.email}</p>
            <button onClick={handleLogOut} className="bg-red-600 mt-5 py-2 text-white rounded-full">Log out</button>
        </ul>
    </div>
}

export default UserProfile