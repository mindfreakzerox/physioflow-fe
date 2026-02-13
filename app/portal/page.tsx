import type { Metadata } from 'next';
import { PortalPreview } from '../../components/PortalPreview';

export const metadata: Metadata = {
  title: 'Patient portal preview',
  description: 'Static-export friendly patient-facing mock with simple access toggles.'
};

export const dynamic = 'force-static';

export default function PortalPage() {
  return (
    <main className="section">
      <div className="container">
        <PortalPreview />
      </div>
    </main>
  );
}
