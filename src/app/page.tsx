"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { TradeCandidateList } from "@/features/trade-candidates/components/TradeCandidateList";
import { SecurityDetailPanel } from "@/features/trade-candidates/components/SecurityDetailPanel";
import { useTradeCandidates } from "@/features/trade-candidates/hooks/useTradeCandidates";
import { useState } from "react";
import { getMostRecentTradingDay } from "@/lib/dates";

export default function DashboardPage() {
  const tradingDay = getMostRecentTradingDay();
  console.log(tradingDay);
  const { candidates, isLoading } = useTradeCandidates(tradingDay);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = candidates.find((c) => c.security.id === selectedId);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[calc(100vh-4rem)]"
    >
      <ResizablePanel defaultSize={35} minSize={25}>
        <div className="h-full overflow-y-auto border-r border-border">
          <TradeCandidateList
            candidates={candidates}
            isLoading={isLoading}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel>
        {selected ? (
          <SecurityDetailPanel candidate={selected} />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a trade candidate to view details
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
