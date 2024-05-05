// pages/aboutus/[id].js

import { useRouter } from 'next/router';

// Hardcoded list of team members
const teamDetails = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' }
];

function TeamMemberDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find the team member with the given ID
  const member = teamDetails.find(member => member.id === id);

  // Render team member details or "Developer doesn't exist" message
  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
}

export default TeamMemberDetails;
