import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>('Name');
  const [email, setEmail] = useState<string>('email@example.com');
  const [contact, setContact] = useState<string>('1234567890');
  const [profilePhoto, setProfilePhoto] = useState<string>('');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="profile-container">
      <h1 className="task-title">Task 7</h1>
      <h3>Profile</h3>
      {profilePhoto ? (
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      ) : (
        <div className="profile-photo-placeholder"></div>
      )}
      {isEditing ? (
        <div className="profile-edit-form">
          <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Contact: <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} /></label>
          <label>Profile Photo: <input type="file" onChange={handlePhotoUpload} /></label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Contact:</strong> {contact}</p>
          <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
