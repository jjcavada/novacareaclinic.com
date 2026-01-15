'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MedicalRecord {
  id: string;
  type: 'lab_result' | 'visit_note' | 'prescription' | 'imaging' | 'referral';
  title: string;
  provider: string;
  date: string;
  status: 'available' | 'pending' | 'reviewed';
  summary: string;
  downloadUrl?: string;
}

interface MedicalRecordsProps {
  onBack: () => void;
}

const MedicalRecords = ({ onBack }: MedicalRecordsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted rounded-lg h-24"></div>
          ))}
        </div>
      </div>
    );
  }

  const mockRecords: MedicalRecord[] = [
    {
      id: '1',
      type: 'lab_result',
      title: 'Complete Blood Count (CBC)',
      provider: 'Dr. Michael Rodriguez',
      date: '2025-11-05',
      status: 'available',
      summary: 'All values within normal range. Hemoglobin: 14.2 g/dL, White blood cells: 6,800/μL',
      downloadUrl: '#'
    },
    {
      id: '2',
      type: 'visit_note',
      title: 'Therapy Session Notes',
      provider: 'Dr. Sarah Chen',
      date: '2025-11-08',
      status: 'available',
      summary: 'Patient showing improvement in anxiety management. Discussed coping strategies and homework assignments.',
    },
    {
      id: '3',
      type: 'prescription',
      title: 'Medication Update',
      provider: 'Dr. Michael Rodriguez',
      date: '2025-11-01',
      status: 'available',
      summary: 'Sertraline dosage increased to 75mg daily. Monitor for side effects and schedule follow-up in 4 weeks.',
    },
    {
      id: '4',
      type: 'imaging',
      title: 'Chest X-Ray',
      provider: 'Radiology Department',
      date: '2025-10-28',
      status: 'available',
      summary: 'No acute cardiopulmonary abnormalities detected. Heart size normal, lungs clear.',
      downloadUrl: '#'
    },
    {
      id: '5',
      type: 'referral',
      title: 'Cardiology Referral',
      provider: 'Dr. Michael Rodriguez',
      date: '2025-10-25',
      status: 'pending',
      summary: 'Referral to Dr. James Wilson for cardiac evaluation due to family history.',
    },
    {
      id: '6',
      type: 'lab_result',
      title: 'Lipid Panel',
      provider: 'Lab Services',
      date: '2025-10-20',
      status: 'available',
      summary: 'Total cholesterol: 185 mg/dL, LDL: 110 mg/dL, HDL: 55 mg/dL, Triglycerides: 120 mg/dL',
      downloadUrl: '#'
    }
  ];

  const recordTypes = [
    { key: 'all', label: 'All Records', icon: 'DocumentTextIcon' },
    { key: 'lab_result', label: 'Lab Results', icon: 'BeakerIcon' },
    { key: 'visit_note', label: 'Visit Notes', icon: 'ChatBubbleLeftRightIcon' },
    { key: 'prescription', label: 'Prescriptions', icon: 'PlusIcon' },
    { key: 'imaging', label: 'Imaging', icon: 'PhotoIcon' },
    { key: 'referral', label: 'Referrals', icon: 'ArrowTopRightOnSquareIcon' }
  ];

  const filteredRecords = activeFilter === 'all'
    ? mockRecords
    : mockRecords.filter(record => record.type === activeFilter);

  const getRecordIcon = (type: string) => {
    const iconMap: { [key: string]: string } = {
      lab_result: 'BeakerIcon',
      visit_note: 'ChatBubbleLeftRightIcon',
      prescription: 'PlusIcon',
      imaging: 'PhotoIcon',
      referral: 'ArrowTopRightOnSquareIcon'
    };
    return iconMap[type] || 'DocumentTextIcon';
  };

  const getStatusColor = (status: string) => {
    const colorMap: { [key: string]: string } = {
      available: 'text-success bg-success/10',
      pending: 'text-warning bg-warning/10',
      reviewed: 'text-muted-foreground bg-muted'
    };
    return colorMap[status] || 'text-muted-foreground bg-muted';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-muted rounded-lg transition-micro"
        >
          <Icon name="ArrowLeftIcon" size={20} className="text-muted-foreground" />
        </button>
        <div>
          <h1 className="font-headline text-2xl font-semibold text-foreground">
            Medical Records
          </h1>
          <p className="font-body text-muted-foreground">
            Access your complete medical history and test results
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg shadow-soft p-4 text-center">
          <div className="font-headline text-2xl font-semibold text-primary mb-1">
            {mockRecords.filter(r => r.status === 'available').length}
          </div>
          <div className="font-body text-sm text-muted-foreground">Available Records</div>
        </div>
        <div className="bg-card rounded-lg shadow-soft p-4 text-center">
          <div className="font-headline text-2xl font-semibold text-warning mb-1">
            {mockRecords.filter(r => r.status === 'pending').length}
          </div>
          <div className="font-body text-sm text-muted-foreground">Pending Results</div>
        </div>
        <div className="bg-card rounded-lg shadow-soft p-4 text-center">
          <div className="font-headline text-2xl font-semibold text-accent mb-1">
            {mockRecords.filter(r => r.type === 'lab_result').length}
          </div>
          <div className="font-body text-sm text-muted-foreground">Lab Results</div>
        </div>
        <div className="bg-card rounded-lg shadow-soft p-4 text-center">
          <div className="font-headline text-2xl font-semibold text-secondary mb-1">
            {mockRecords.filter(r => r.downloadUrl).length}
          </div>
          <div className="font-body text-sm text-muted-foreground">Downloadable</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h2 className="font-headline text-lg font-semibold text-foreground mb-4">
          Filter Records
        </h2>
        <div className="flex flex-wrap gap-2">
          {recordTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setActiveFilter(type.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-micro ${activeFilter === type.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
            >
              <Icon name={type.icon as any} size={16} />
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Records List */}
      <div className="bg-card rounded-lg shadow-soft">
        <div className="p-6 border-b border-border">
          <h2 className="font-headline text-lg font-semibold text-foreground">
            {activeFilter === 'all' ? 'All Medical Records' : recordTypes.find(t => t.key === activeFilter)?.label}
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            {filteredRecords.length} record(s) found
          </p>
        </div>

        <div className="divide-y divide-border">
          {filteredRecords.map((record) => (
            <div key={record.id} className="p-6 hover:bg-muted/30 transition-micro">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={getRecordIcon(record.type) as any} size={24} className="text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-headline font-semibold text-foreground mb-1">
                        {record.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {record.provider} • {record.date}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </div>

                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {record.summary}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedRecord(record)}
                      className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1 text-sm font-medium"
                    >
                      <Icon name="EyeIcon" size={16} />
                      View Details
                    </button>

                    {record.downloadUrl && (
                      <button className="text-secondary hover:text-secondary/80 transition-micro flex items-center gap-1 text-sm font-medium">
                        <Icon name="ArrowDownTrayIcon" size={16} />
                        Download
                      </button>
                    )}

                    <button className="text-muted-foreground hover:text-foreground transition-micro flex items-center gap-1 text-sm font-medium">
                      <Icon name="ShareIcon" size={16} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <div className="p-12 text-center">
            <Icon name="DocumentTextIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
              No Records Found
            </h3>
            <p className="font-body text-muted-foreground">
              No medical records match your current filter selection.
            </p>
          </div>
        )}
      </div>

      {/* Record Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-brand max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-xl font-semibold text-foreground">
                  {selectedRecord.title}
                </h2>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-micro"
                >
                  <Icon name="XMarkIcon" size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body font-medium text-foreground">Provider</label>
                    <p className="font-body text-muted-foreground">{selectedRecord.provider}</p>
                  </div>
                  <div>
                    <label className="font-body font-medium text-foreground">Date</label>
                    <p className="font-body text-muted-foreground">{selectedRecord.date}</p>
                  </div>
                </div>

                <div>
                  <label className="font-body font-medium text-foreground">Summary</label>
                  <p className="font-body text-muted-foreground mt-1">{selectedRecord.summary}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedRecord.downloadUrl && (
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-micro flex items-center gap-2">
                      <Icon name="ArrowDownTrayIcon" size={16} />
                      Download
                    </button>
                  )}
                  <button className="bg-muted text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted/80 transition-micro flex items-center gap-2">
                    <Icon name="ShareIcon" size={16} />
                    Share with Provider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalRecords;