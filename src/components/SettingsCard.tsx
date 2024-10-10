/* a sleek and modern settings page component for a SaaS management dashboard, encapsulated in a floating card with subtle shadow and rounded corners. The component should feature a tabbed interface with smooth transitions between sections. Include the following tabs and settings:
 
General:
Company name and logo upload
Time zone selector
Language preference dropdown
 
API & Integrations:
API key management with a toggle to show/hide keys
OAuth token generator with a copy-to-clipboard button
Webhook URL configuration with test ping functionality
Third-party integration toggles with connection status indicators
 */

import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Globe, Key, Upload, Copy, ArrowClockwise } from '@phosphor-icons/react';
import Input from '@/components/ion/Input';
import Select from '@/components/ion/Select';
import { Tab, Tabs, TabsContent, TabsList } from '@/components/ion/Tabs';
import Switch from '@/components/ion/Switch';
import Button from '@/components/ion/Button';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [timeZone, setTimeZone] = useState('');
  const [language, setLanguage] = useState('');
  const [showApiKeys, setShowApiKeys] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    setCompanyLogo(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const generateOAuthToken = () => {
    const token = 'generated-oauth-token';
    navigator.clipboard.writeText(token);
    alert('OAuth token generated and copied to clipboard!');
  };

  const testWebhook = () => {
    alert('Webhook test initiated!');
  };

  useEffect(() => {
    setTimeout(() => {
      setCompanyName('Acme Inc.');
      setTimeZone('UTC');
      setLanguage('en');
      setWebhookUrl('https://api.example.com/webhook');
    }, 1000);
  }, []);

  return (
    <div
      className="bg-background w-full max-w-4xl mx-auto p-8 rounded-radius-lg shadow-medium"
    >
      <h1 className="text-3xl font-semibold text-foreground mb-6">Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <Tab value="general"><Globe size={16} weight="bold" />General</Tab>
          <Tab value="api"><Key size={16} weight="bold" />API & Integrations</Tab>
        </TabsList>

        <TabsContent value="general">
          <div className="space-y-6">
            <Input
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <div>
              <label className="block text-sm font-medium text-secondary mb-2">Company Logo</label>
              <div
                {...getRootProps()}
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-radius-sm cursor-pointer ${
                  isDragActive ? 'bg-container-high' : 'bg-container hover:bg-container-high'
                }`}
              >
                <input {...getInputProps()} />
                <Upload size={48} className="mb-3 text-secondary" />
                <p className="mb-2 text-sm text-secondary">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-subtle">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
            </div>

            <Select
              label="Time Zone"
              options={[
                { value: 'UTC', label: 'UTC' },
                { value: 'EST', label: 'Eastern Time (EST)' },
                { value: 'PST', label: 'Pacific Time (PST)' },
              ]}
              value={timeZone}
              onValueChange={setTimeZone}
            />

            <Select
              label="Language"
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
                { value: 'fr', label: 'Français' },
              ]}
              value={language}
              onValueChange={setLanguage}
            />
          </div>
        </TabsContent>

        <TabsContent value="api">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">API Keys</h2>
              <Switch
                label="Show API Keys"
                checked={showApiKeys}
                onCheckedChange={setShowApiKeys}
              />
              <div className="mt-4 p-4 bg-container rounded-radius-sm">
                <p className="font-semibold text-foreground">Production API Key</p>
                <p className="text-sm text-secondary mt-1">
                  {showApiKeys ? 'sk_live_1234567890abcdefghijklmnop' : '••••••••••••••••'}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">OAuth Token Generator</h2>
              <Button
                variant="outline"
                color="primary"
                size="sm"
                onClick={generateOAuthToken}
                iconLeading={<Copy size={16} weight="bold" />}
              >
                Generate and Copy OAuth Token
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Webhook Configuration</h2>
              <Input
                label="Webhook URL"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
              />
              <Button
                variant="outline"
                color="primary"
                size="sm"
                className="mt-2"
                onClick={testWebhook}
                iconLeading={<ArrowClockwise size={16} weight="bold" />}
              >
                Test Webhook
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Third-party Integrations</h2>
              <div className="space-y-4">
                {['Slack', 'Google Analytics'].map((integration) => (
                  <div key={integration} className="flex items-center justify-between p-4 bg-container rounded-radius-sm">
                    <span className="font-semibold text-foreground">{integration}</span>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default SettingsPage;