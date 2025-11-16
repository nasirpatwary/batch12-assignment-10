import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
const Profile = () => {
  const { user, updateUserProfile, setLoading } = useAuth();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully");
      setLoading(false);
    } catch (error) {
      if (error) toast.error("Error updating profile");
    }
  };
  return (
    <>
      <title>My || Profile</title>
      <div className="flex items-center justify-center py-12 lg:h-screen bg-no-repeat bg-cover relative">
        <div className="card backdrop-blur-sm w-full max-w-sm shrink-0 shadow-2xl">
          <div></div>
          <div className="text-center mt-8">
            <img
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt="Profile"
              className="size-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold">
              {user?.displayName || "User Name"}
            </h2>
            <p>{user?.email}</p>
          </div>
          <form onSubmit={handleUpdate} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Your Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input-field"
                placeholder="Your Photo URL"
                required
              />
              <button className="btn btn-neutral mt-4">Save Changes</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
