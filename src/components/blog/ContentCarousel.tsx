import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";

interface ContentCarouselProps {
  posts: Post[];
  title?: string;
}

const ContentCarousel = ({ posts, title = "Destaques para você" }: ContentCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const total = posts.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (posts.length === 0) return null;

  const post = posts[current];

  return;



































































};

export default ContentCarousel;