/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.pexels.com"
            }
        ]
    },

    webpack: (config) => {
        config.cache = false; // Disable caching
        return config;
      },
}

module.exports = nextConfig


// disabling caching during development means that Webpack won’t cache modules, which can lead to slower build times. However, it’s sometimes necessary for resolving or debugging issues related to dependencies, as we just experienced.

// ### During Development
// 1. **Caching Impact**: By disabling caching, every build is processed from scratch, which can be slightly slower. However, it ensures that any changes are fully reflected without being cached improperly, which is particularly useful when debugging.
// 2. **Performance Testing**: During active development, performance is typically assessed at a different level—e.g., through profiling tools, lighthouse reports, or other runtime measurements—rather than relying on Webpack’s caching optimizations.
// 3. **Re-enabling Caching**: If you’re doing more extensive development and no longer facing issues, you could re-enable caching by setting `config.cache = true`. This would improve build times again, as Webpack won’t recompile unchanged modules.

// ### For Deployment
// - **Caching is Essential in Production**: In production, caching is critical for performance. The deployment will use optimized caching by default, and the application should not encounter the same caching error because production dependencies are typically more stable.
// - **Webpack Behavior in Production**: Webpack’s production build processes are more stable and optimized, often eliminating errors that appear during development builds. When deploying, re-enabling caching is advised to ensure high performance.

// ### Recap of Recommended Steps
// 1. **During Debugging**: Keep caching disabled to ensure module changes reflect immediately.
// 2. **General Development**: Once the debugging phase is over, re-enable caching by removing `config.cache = false`.
// 3. **Deployment**: Webpack’s default production build setup handles caching efficiently, and the error shouldn’t recur. However, if it does, it could indicate dependency resolution issues that require more targeted fixes.

