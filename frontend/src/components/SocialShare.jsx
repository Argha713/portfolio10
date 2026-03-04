import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';
import { Share2 } from 'lucide-react';

const SocialShare = ({ url, title, description }) => {
  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Check out this article';

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      <div className="flex items-center gap-2">
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <div className="hover:scale-110 transition-transform">
            <TwitterIcon size={32} round />
          </div>
        </TwitterShareButton>

        <LinkedinShareButton url={shareUrl} title={shareTitle} summary={description}>
          <div className="hover:scale-110 transition-transform">
            <LinkedinIcon size={32} round />
          </div>
        </LinkedinShareButton>

        <FacebookShareButton url={shareUrl} quote={shareTitle}>
          <div className="hover:scale-110 transition-transform">
            <FacebookIcon size={32} round />
          </div>
        </FacebookShareButton>

        <WhatsappShareButton url={shareUrl} title={shareTitle}>
          <div className="hover:scale-110 transition-transform">
            <WhatsappIcon size={32} round />
          </div>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
