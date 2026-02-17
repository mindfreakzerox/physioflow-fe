import React from 'react';
import { Card } from '@/components/ui/Card';

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <Card title="Clinic settings">
        <div className="space-y-2 text-sm text-gray-700">
          <p>Mock mode is locked on. Flip USE_MOCK_MODE to false only when real services are configured.</p>
          <p>File uploads save to /public/uploads locally.</p>
          <p>Calendar sync is offline; generates .ics downloads until API keys are present.</p>
        </div>
      </Card>
      <Card title="Environment">
        <ul className="list-disc space-y-1 pl-4 text-sm text-gray-700">
          <li>Vercel target: server build only (no <code>next export</code>).</li>
          <li>Base path / asset prefix are unset by default; set BASE_PATH/ASSET_PREFIX only when needed.</li>
          <li>Use BUILD_PROGRESS=1 or DISABLE_WEBPACK_CACHE=1 for verbose builds and cache toggles.</li>
        </ul>
      </Card>
    </div>
  );
}
