import { useRouter } from 'next/router';
import { teamDetails } from './teamDetails';



const TeamMemberDetails = ()=> {
  const router = useRouter();
  const { team } = router.query;
  //you can guard against undefined values or use conditional rendering based on the presence of router.query
  if (!team) {
    return <div>Loading...</div>;
  }
  // Find the team member with the given ID
  const member = teamDetails.find(member => member.id === team);
  console.log(member);

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
