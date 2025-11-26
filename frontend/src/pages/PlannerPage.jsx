// frontend/src/pages/PlannerPage.jsx
import { useState } from 'react';
import Section from '../components/ui/Section.jsx';
import PlannerForm from '../components/planner/PlannerForm.jsx';
import PlannerResults from '../components/planner/PlannerResults.jsx';
import PlannerIntroModal from '../components/planner/PlannerIntroModal.jsx';
import { apiClient } from '../lib/apiClient.js';

const PlannerPage = () => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleBuildPlan = async (values) => {
    setLoading(true);
    setPlan(null);

    try {
      const data = await apiClient.post('/api/planner/recommendations', values);
      setPlan(data);
    } catch (error) {
      console.error('Failed to build plan', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PlannerIntroModal
        open={showIntro}
        onClose={() => setShowIntro(false)}
        onStart={() => {
          // ممكن هنا مستقبلاً نعمل focus على أول input
        }}
      />

      <Section className="planner-page">
        <div className="planner-grid">
          <div>
            <h1 className="planner-title">Design a playful weekly journey.</h1>
            <p className="planner-subtitle">
              Tell us about your little learner and we&apos;ll build a one-week
              plan with Kideo-style apps and simple routines.
            </p>
            <PlannerForm onSubmit={handleBuildPlan} loading={loading} />
          </div>

          <PlannerResults plan={plan} loading={loading} />
        </div>
      </Section>
    </>
  );
};

export default PlannerPage;
