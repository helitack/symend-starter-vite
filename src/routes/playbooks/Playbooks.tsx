import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import playbookMethods from "../../api/services/campaign/endpoints/playbooks/methods";
import { PlaybookListItem } from "../../api/services/campaign/endpoints/playbooks/models";

export default function Playbooks() {
  const { getAccessTokenSilently } = useAuth0();
  const [playbooks, setPlaybooks] = useState<PlaybookListItem[]>([]);

  useEffect(() => {
    async function fetchPlaybooks() {
      const token = await getAccessTokenSilently();
      const response = await playbookMethods.get({
        options: {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Sym-Organizationid": "deadbeef-dead-beef-dead-beefdeadbeef",
          },
          params: {
            limit: 1000,
          },
        },
      });
      setPlaybooks(response.data);
    }
    fetchPlaybooks();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1>Playbooks</h1>
      <ul>
        {playbooks.map((playbook) => (
          <li key={playbook.id}>{playbook.name}</li>
        ))}
      </ul>
    </div>
  );
}
