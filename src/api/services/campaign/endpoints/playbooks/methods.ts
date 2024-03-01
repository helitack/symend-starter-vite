import { AxiosRequestConfig } from "axios";
import { apiClient } from "../../../../api-client";
import { ApiResponse } from "../../../../types";
import { CAMPAIGN_API_NAMESPACE } from "../../constants";
import { PlaybookListItem } from "./models";

const PLAYBOOKS_ROUTE = `/${CAMPAIGN_API_NAMESPACE}/v1/playbooks`;

async function getPlaybooksList({
  options,
}: { options?: AxiosRequestConfig } = {}) {
  const response = await apiClient.get<ApiResponse<PlaybookListItem[]>>(
    PLAYBOOKS_ROUTE,
    options,
  );
  return response.data;
}

const playbookMethods = {
  get: getPlaybooksList,
};

export default playbookMethods;
