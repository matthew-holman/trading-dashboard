"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { TradeCandidate } from "../adapters/mapToTradeCandidates";

type Props = {
  candidates: TradeCandidate[];
  isLoading: boolean;
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export function TradeCandidateList({
  candidates,
  isLoading,
  selectedId,
  onSelect,
}: Props) {
  if (isLoading) return <div className="p-6">Loading trade candidates...</div>;

  return (
    <ScrollArea className="h-full p-4">
      <div className="space-y-3">
        {candidates.map(({ security, signals }) => (
          <Card
            key={security.id}
            className={`cursor-pointer transition-colors ${
              selectedId === security.id
                ? "bg-accent/40 border-accent"
                : "hover:bg-muted/40"
            }`}
            onClick={() => onSelect(security.id)}
          >
            <CardHeader>
              <CardTitle className="text-sm font-medium flex justify-between">
                <span>{security.symbol}</span>
                <span className="text-muted-foreground text-xs">
                  {signals.length} signals
                </span>
              </CardTitle>
              <CardDescription className="text-xs">
                {security.companyName}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
