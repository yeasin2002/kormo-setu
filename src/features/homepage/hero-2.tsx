import { Badge, buttonVariants } from '@/components/retroui';
import { SparklesStars } from '@/components/shared';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { BriefcaseBusiness, FileText, PackageOpen } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { HeroFeatureCard } from './hero-feature-card';

export const Hero2 = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);

  return (
    <div className="bg-background text-foreground relative container mx-auto mb-20 overflow-hidden">
      {/* Decorative Stars */}
      <SparklesStars />
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-16 lg:pt-24">
        <div className="mx-auto max-w-6xl text-center">
          {/* Promotional Badge */}
          <div className="mb-12">
            <Badge className="rounded-full border-2 border-black bg-yellow-400 px-6 py-2 text-sm font-medium text-black shadow-sm hover:bg-yellow-500">
              AI Powered Job Platform
            </Badge>
          </div>

          <h1 className="- font-head mb-8 text-4xl font-bold uppercase md:text-5xl lg:text-6xl xl:text-7xl">
            Making job searching
            <br />
            <span className="text-yellow-500">less frustrating.!</span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-lg leading-relaxed md:text-xl">
            We are a platform that helps you find the best job for you. A place where you can find
            companies that match your skills and interests. A place where you can find
            opportunities. A place where you can grow your skills and get hired.
            {/* <span className="font-semibold text-foreground">stand out</span>. */}
          </p>

          <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
            {!session?.session && (
              <Link
                href={'/register'}
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className: 'rounded-lg py-4 font-semibold',
                  }),
                )}
              >
                Sign Up
              </Link>
            )}

            <Link
              href="/bd-tech-companies"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'rounded-lg py-4 font-semibold',
                }),
              )}
            >
              Explore Companies
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <HeroFeatureCard
            Icon={BriefcaseBusiness}
            title="Companies from Bangladesh"
            description="Get all companies with there details."
          />
          <HeroFeatureCard
            Icon={FileText}
            title="Tools "
            description="Tools to help you in your job search."
          />

          <HeroFeatureCard
            Icon={PackageOpen}
            title="Resources"
            description="Coming with all the resources you need."
          />
        </div>
      </div>
    </div>
  );
};
