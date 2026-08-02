/**
 * lottie-web의 light 빌드(SVG 렌더러 전용) 서브패스에는 타입 선언이 없어
 * 사용하는 API만 최소로 선언한다.
 */
declare module "lottie-web/build/player/esm/lottie_light.min.js" {
  interface LottieAnimation {
    destroy(): void;
    goToAndStop(value: number, isFrame?: boolean): void;
    addEventListener(event: string, handler: () => void): void;
  }

  interface LottieLoadParams {
    container: Element;
    renderer: "svg";
    loop: boolean;
    autoplay: boolean;
    path: string;
    rendererSettings?: Record<string, unknown>;
  }

  const lottie: {
    loadAnimation(params: LottieLoadParams): LottieAnimation;
  };

  export default lottie;
}
