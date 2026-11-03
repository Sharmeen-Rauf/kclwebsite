import React from "react";

export interface CoordinationStepItem {
  stepCode: string;
  label: string;
  detail: string;
}

const DEFAULT_WORKFLOW_STEPS: CoordinationStepItem[] = [
  {
    stepCode: "01",
    label: "Share the operation",
    detail:
      "Provide route, aircraft registration and type, intended UTC schedule, flight purpose, and requested services.",
  },
  {
    stepCode: "02",
    label: "Clarify the scope",
    detail:
      "Relevant documentation, regulatory considerations, and connected airport or crew service requirements are reviewed.",
  },
  {
    stepCode: "03",
    label: "Coordinate the parties",
    detail:
      "Assistance with permission applications and provider arrangements proceeds through the applicable channels.",
  },
  {
    stepCode: "04",
    label: "Communicate the next steps",
    detail:
      "Status updates, authority or supplier questions, and outstanding information requirements are shared as available.",
  },
];

interface RequestTrackerPreviewProps {
  steps?: CoordinationStepItem[];
}

export function RequestTrackerPreview({
  steps = DEFAULT_WORKFLOW_STEPS,
}: RequestTrackerPreviewProps) {
  return (
    <div className="bg-white border border-[#CBD5E1]">
      <div className="bg-[#F6F8FB] border-b border-[#CBD5E1] px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold bg-[#0B2545] text-[#E8A200] px-2 py-0.5">
            COORDINATION WORKFLOW
          </span>
          <span className="text-sm font-bold text-[#0B2545]">
            How KCL Flight Support Coordination Works
          </span>
        </div>
        <span className="font-mono text-xs text-[#5C6B7A]">
          PROCESS OVERVIEW · NOT A LIVE STATUS TRACKER
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <li
              key={step.stepCode}
              className="border border-[#CBD5E1] bg-[#F6F8FB] p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#0B2545] text-[#E8A200]">
                    STEP {step.stepCode}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0B2545] mb-1.5">
                  {step.label}
                </h3>
                <p className="text-xs text-[#16202B] leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200 font-mono text-[11px] uppercase text-[#5C6B7A]">
                Coordination Stage {step.stepCode}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
