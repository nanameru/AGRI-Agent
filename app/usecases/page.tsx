'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ClipboardList, Search, BarChart3, Home, CheckCircle } from 'lucide-react';
import React from 'react';

const useCases = [
  {
    icon: ClipboardList,
    title: "営農計画の自動立案",
    description: "作物や規模に応じた最適な営農計画を、データに基づいて自動で作成します。面倒な計画策定の手間を大幅に削減します。",
    features: [
      "年間作付計画の策定",
      "収支シミュレーション",
      "栽培データに基づくコスト計算",
    ]
  },
  {
    icon: Search,
    title: "補助金・手続きの徹底サポート",
    description: "国、都道府県、市町村の最新情報を常に監視。あなたに最適な補助金や助成金を見つけ出し、複雑な申請手続きをナビゲートします。",
    features: [
      "新規就農者向け補助金の検索",
      "利用可能な助成金のリストアップ",
      "農地取得・賃借手続きの調査",
    ]
  },
  {
    icon: BarChart3,
    title: "経営・販路拡大を強力に支援",
    description: "日々の作業記録から経営状態を可視化し、新たなビジネスチャンスを創出。魅力的なプレゼン資料で販路拡大を後押しします。",
    features: [
      "日報の自動解析とナレッジ化",
      "業務マニュアルの自動生成",
      "バイヤー向けプレゼン資料の作成",
    ]
  },
  {
    icon: Home,
    title: "移住と地域生活の不安を解消",
    description: "農業を始めるための移住準備から、地域コミュニティへの参加まで。あなたの新しい生活をスムーズに始められるよう、総合的にサポートします。",
    features: [
      "お試し移住のための宿泊先検索",
      "都市部からの最適な交通ルート提案",
      "地域のイベントや求人情報の提供",
    ]
  }
];

export default function UsecasesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <PageHeader className="mb-8">
              <PageHeaderHeading>営農アシスタントのユースケース</PageHeaderHeading>
              <PageHeaderDescription>
                AGRIagentは、あなたの農業経営のあらゆる場面をサポートします。
              </PageHeaderDescription>
            </PageHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-muted rounded-md flex items-center justify-center">
                        <useCase.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <CardTitle>{useCase.title}</CardTitle>
                        <CardDescription className="mt-1">{useCase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {useCase.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 