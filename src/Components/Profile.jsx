import React, { useEffect, useState } from 'react'
import './Profile.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";


const Profile = ({data, payload, setPayload, index}) => {
    const [like, setLike] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [website, setWebsite] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(()=> {
    setName(data.name)
    setEmail(data.mail)
    setPhone(data.phone)
    setWebsite(data.website)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    let arr = [...payload];
    let updatedProfileData = {
        name: name,
        mail: email,
        phone: phone,
        website: website
    }
    arr[index] = updatedProfileData;

    setPayload(arr)

    closePopup();
  };

  const handleDelete = () => {
    let arr = [...payload];
    arr.splice(index, 1);
    setPayload(arr)
  }

    const handleLike = () => {
        setLike(true)
    }
    const handleUnlike = () => {
        setLike(false)
    }
  return (
    <div className='profile-section'>
        <div className="profile-layer1">
            <div className="outdated-img">
                <img width='200px' src='https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'/>
            </div>
        </div>
        <div className="profile-layer2">
            <div className="layer2-name">
            {data.name}
            </div>
            <div className="mail">
                <GoMail/>
            <span>{data.mail}</span>
            </div>
            <div className="phone">
                <FaPhone/>
                <span>{data.phone}</span> 
            </div>
            <div className="website">
                <TfiWorld/>
                <span>{data.website}</span>
            </div>
        </div>
        <div className="profile-layer3">
            <div className='icon'>
                {
                    !like ? <FaRegHeart style={{color:"red", cursor:"pointer"}} onClick={handleLike}/>
                    : <FaHeart style={{color:"red", cursor:"pointer"}} onClick={handleUnlike}/>
                }
            </div>
            <div className='edit'>
                <CiEdit style={{cursor:"pointer", color:"grey"}} onClick={openPopup}/>
            </div>
            <div className='icon'>
                <MdDelete onClick={handleDelete} style={{cursor:"pointer", color:"grey"}}/>
            </div>
        </div>
        <div>

{/* popup code start */}

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <form className='popup-form' onSubmit={handleSubmit}>
                <div className='modal'>
                    Basic Modal
                </div>
              <label>
                <span className='star'>*</span>
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </label>
              <br />
              <label>
              <span className='star'>*</span>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}                />
              </label>
              <br />
              <label>
              <span className='star'>*</span>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}                />
              </label>
              <br />
              <label>
              <span className='star'>*</span>
                Website:
                <input
                  type="url"
                  name="website"
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value)
                  }}                />
              </label>
              <br />
              <div className="btn-div">
              <button className='cancel' onClick={closePopup}>Cancel</button>
              <button className='submit' type="submit">OK</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
{/* popup code end*/}

    </div>
  )
}

export default Profile