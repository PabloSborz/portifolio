import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() appScrollRevealDelay = '0ms';

  private observer?: IntersectionObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly zone: NgZone,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'scroll-reveal');
    this.renderer.setStyle(element, '--reveal-delay', this.normalizeDelay(this.appScrollRevealDelay));

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.show(element);
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.show(element);
              this.observer?.unobserve(element);
            }
          }
        },
        {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.14,
        },
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private show(element: HTMLElement): void {
    this.renderer.addClass(element, 'is-visible');
  }

  private normalizeDelay(delay: string | number): string {
    if (typeof delay === 'number') {
      return `${delay}ms`;
    }

    const trimmedDelay = delay.trim();
    return trimmedDelay ? trimmedDelay : '0ms';
  }
}
