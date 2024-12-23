import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogContent } from '../../components/blog/BlogContent';
import { youngFamilyEstatePlan } from '../../data/blogPosts/youngFamilyEstatePlan';
import { livingTrustsGuide } from '../../data/blogPosts/livingTrustsGuide';
import { estatePlanningMistakes } from '../../data/blogPosts/estatePlanningMistakes';
import { specialNeedsTrust } from '../../data/blogPosts/specialNeedsTrust';
import { estateTaxPlanning } from '../../data/blogPosts/estateTaxPlanning';
import { blendedFamilies } from '../../data/blogPosts/blendedFamilies';
import { guardianship } from '../../data/blogPosts/guardianship';
import { digitalAssets } from '../../data/blogPosts/digitalAssets';
import { advanceDirectives } from '../../data/blogPosts/advanceDirectives';
import { featuredPosts, recentPosts } from '../../data/blog';
import { revocableVsIrrevocableTrusts } from '../../data/blogPosts/revocableVsIrrevocableTrusts';
import { charitableRemainderTrusts } from '../../data/blogPosts/charitableRemainderTrusts';
import { spendthriftTrusts } from '../../data/blogPosts/spendthriftTrusts';
import { trusteeSelection } from '../../data/blogPosts/trusteeSelection';
import { petTrusts } from '../../data/blogPosts/petTrusts';
import { trustFunding } from '../../data/blogPosts/trustFunding';
import { probateBasics } from '../../data/blogPosts/probateBasics';
import { probateDelays } from '../../data/blogPosts/probateDelays';
import { probateDebts } from '../../data/blogPosts/probateDebts';
import { whenProbateNecessary } from '../../data/blogPosts/whenProbateNecessary';
import { gratsPlanning } from '../../data/blogPosts/gratsPlanning';
import { stateTaxes } from '../../data/blogPosts/stateTaxes';
import { lifetimeGifting } from '../../data/blogPosts/lifetimeGifting';
import { familyPartnerships } from '../../data/blogPosts/familyPartnerships';
import { qprts } from '../../data/blogPosts/qprts';
import { portability } from '../../data/blogPosts/portability';
import { realEstateProtection } from '../../data/blogPosts/realEstateProtection';
import { daptTrusts } from '../../data/blogPosts/daptTrusts';
import { businessEntities } from '../../data/blogPosts/businessEntities';
import { offshoreTrusts } from '../../data/blogPosts/offshoreTrusts';
import { elderFinancialAbuse } from '../../data/blogPosts/elderFinancialAbuse';

export function BlogPostPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  if (!slug) {
    return <div>Post not found</div>;
  }

  const post = [...featuredPosts, ...recentPosts].find(p => p.slug === slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }

  const getBlogContent = (slug: string) => {
    switch (slug) {
      case 'why-every-young-family-needs-estate-plan':
        return youngFamilyEstatePlan;
      case 'understanding-living-trusts-comprehensive-guide':
        return livingTrustsGuide;
      case '5-common-estate-planning-mistakes':
        return estatePlanningMistakes;
      case 'special-needs-trusts-protecting-loved-ones':
        return specialNeedsTrust;
      case 'estate-tax-planning-strategies-2024':
        return estateTaxPlanning;
      case 'blended-families-estate-planning':
        return blendedFamilies;
      case 'guardianship-101-protecting-minor-children':
        return guardianship;
      case 'digital-assets-estate-planning':
        return digitalAssets;
      case 'advance-healthcare-directives':
        return advanceDirectives;
      case 'revocable-vs-irrevocable-trusts':
        return revocableVsIrrevocableTrusts;
      case 'charitable-remainder-trusts':
        return charitableRemainderTrusts;
      case 'spendthrift-trusts':
        return spendthriftTrusts;
      case 'trustee-selection-responsibilities':
        return trusteeSelection;
      case 'specialty-trusts-for-pets':
        return petTrusts;
      case 'how-to-fund-your-trust':
        return trustFunding;
      case 'probate-basics-guide':
        return probateBasics;
      case 'common-probate-delays':
        return probateDelays;
      case 'probate-debts-liabilities':
        return probateDebts;
      case 'when-probate-necessary':
        return whenProbateNecessary;
      case 'grantor-retained-annuity-trusts':
        return gratsPlanning;
      case 'state-inheritance-estate-taxes':
        return stateTaxes;
      case 'lifetime-gifting-strategies':
        return lifetimeGifting;
      case 'family-limited-partnerships':
        return familyPartnerships;
      case 'qualified-personal-residence-trusts':
        return qprts;
      case 'estate-tax-exemption-portability':
        return portability;
      case 'real-estate-asset-protection':
        return realEstateProtection;
      case 'domestic-asset-protection-trusts':
        return daptTrusts;
      case 'business-entities-asset-protection':
        return businessEntities;
      case 'offshore-asset-protection-trusts':
        return offshoreTrusts;
      case 'avoiding-elder-financial-abuse':
        return elderFinancialAbuse;
      default:
        return null;
    }
  };

  const content = getBlogContent(slug);

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeader
          title={post.title}
          date={post.date}
          readTime={post.readTime}
          author={post.author}
          onBack={() => navigate('/blog')}
        />
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}
        <BlogContent content={content} />
      </div>
    </div>
  );
}