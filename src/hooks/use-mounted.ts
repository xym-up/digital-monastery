"use client";

import { useEffect, useState } from "react";

/**
 * 检测组件是否已在客户端挂载
 * 解决 SSR hydration 不匹配问题（如主题切换、时间显示等）
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
