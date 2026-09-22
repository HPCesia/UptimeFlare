// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "HPCesia's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://codeberg.org/HPCesia', label: 'Codeberg' },
    { link: 'https://github.com/HPCesia', label: 'GitHub' },
  ],
  group: {
    '🌐 Public': ['blog', 'artalk', 'forgejo'],
    '🔐 Private': ['vaultwarden', 'wakapi'],
  },
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'blog',
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.hpcesia.com',
      statusPageLink: 'https://blog.hpcesia.com',
    },
    {
      id: 'artalk',
      name: 'Artalk',
      method: 'GET',
      target: 'https://artalk.hpcesia.com/api/v2/version',
    },
    {
      id: 'forgejo',
      name: 'Gate Of Infinity',
      method: 'GET',
      target: 'https://git.trin.one/api/v1/version',
      statusPageLink: 'https://git.trin.one/HPCesia',
    },
    {
      id: 'vaultwarden',
      name: 'Vaultwarden',
      method: 'GET',
      target: 'https://vault.hpcesia.com/alive',
    },
    {
      id: 'wakapi',
      name: 'Wakapi',
      method: 'GET',
      target: 'https://wakapi.hpcesia.com/api/health',
    },
  ],
  // [Optional] Notification settings
  notification: {
  },
}

const maintenances: MaintenanceConfig[] = [
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
