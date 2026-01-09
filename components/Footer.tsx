import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">关于母婴之家</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              专注为妈妈和宝宝提供优质的母婴产品，精选品牌，正品保证，让育儿更轻松。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  全部商品
                </Link>
              </li>
              <li>
                <Link href="/products?category=toys" className="hover:text-white transition-colors">
                  玩具
                </Link>
              </li>
              <li>
                <Link href="/products?category=books" className="hover:text-white transition-colors">
                  图书
                </Link>
              </li>
              <li>
                <Link href="/products?sort=newest" className="hover:text-white transition-colors">
                  新品上架
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">客户服务</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  我的账户
                </Link>
              </li>
              <li>
                <Link href="/account?tab=orders" className="hover:text-white transition-colors">
                  我的订单
                </Link>
              </li>
              <li>
                <Link href="/account?tab=addresses" className="hover:text-white transition-colors">
                  收货地址
                </Link>
              </li>
              <li>
                <Link href="/account?tab=wishlist" className="hover:text-white transition-colors">
                  收藏夹
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>service@unijade.cn</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>⏰</span>
                <span>工作时间: 9:00-21:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 母婴之家. 保留所有权利.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                隐私政策
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                服务条款
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                退换货政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
