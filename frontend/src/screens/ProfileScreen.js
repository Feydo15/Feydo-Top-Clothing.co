import React from 'react';
import Header from "./../Components/Header";
// import ProfileTabs from "./";
// import Orders from "./OrderScreen";

const ProfileScreen = () => {
    window.scrollTo(0, 0);
  return (
    <>
    <Header />
    <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
           <div className="col-lg-4 p-0 shadow">
           <div className="author-card pb-0 pb-md-3">
           <div className="author-card-cover"></div>
     <div className="author-card-profile">
        <div className="author-card-avatar col-md-5">
            <img src="../../public/Home-img/1644216635611.jpg" alt="user profile image" />
        </div>
        <div className="author-card-details col-md-7">
            <h5 className="author-card-name mb-2">
                <strong>Admin Doe</strong>
            </h5>
            <span className="author-card-position">
                <>Joined Dec 29 2022</>
            </span>
        </div>
     </div>
           </div>
        <div className="Wizard pt-3">
            <div className="d-flex align-items-start">
                <div class="nav align-items-start fklex-colmn col-12 nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
                >
                    <button 
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-srlected="true"
                    >
                        Profile Settings
                    </button>
                    <button 
                     class="nav-link d-flex justify-content-between"
                     id="v-pills-profle-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#v-pills-profile"
                     type="button"
                     role="tab"
                     aria-controls="v-pills-profile"
                     aria-srlected="false"
                    >
                        Order List
                        <span className="badge2">3</span>
                    </button>
                </div>
            </div>
        </div>
           </div>
        </div>
           {/* panels */}
           <div
           cl
           ></div>
    </div>
    </>
  )
}

export default ProfileScreen
